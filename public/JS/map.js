let mapToken = MapToken;
// console.log(mapToken);
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  // ***starting position [Longitude, Latitude].****
  //  Nagpur Coordinates: 21.1498°N 79.0806°E
  center: Listing.geometry.coordinates,
  zoom: 10, // starting zoom
});

// console.log(coordinates);

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(Listing.geometry.coordinates) //Listing.geometry.coordinates
  .setPopup(
    new mapboxgl.Popup({ offset: 25 })
      .setHTML(
        `<h4>${Listing.title}</h4><p>Exact location will be provided after booking</p>`
      )
      .setMaxWidth("300px")
  )
  .addTo(map);
