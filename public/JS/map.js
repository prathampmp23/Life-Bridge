// Initialize the map
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [79.0752, 21.1458], // Nagpur coordinates
  zoom: 12, // starting zoom level
});

// Blood bank data
const bloodBanks = [
  {
    name: "Daga Memorial Women Govt. Hospital Blood Centre",
    address: "Gandhibag, Nagpur-440002",
    phone: "0712-2729202",
    coordinates: [79.0882, 21.1458],
  },
  {
    name: "National Blood Bank",
    address: "1st Floor, Vijay Bhawan, Opp Lokmat, Dhantoli, Nagpur",
    phone: "522422",
    coordinates: [79.0849, 21.1466],
  },
  {
    name: "Jeevan Jyoti Blood Centre & Component",
    address:
      "J-12, West High Court Road, Opp. Bank of Baroda, Laxmi Nagar, Nagpur",
    phone: "0712-2231660 / 2230876",
    coordinates: [79.0969, 21.1298],
  },
  {
    name: "Dr. Hegdewar Blood Centre",
    address: "Audumbar Apartment, Dharmpeth, Nagpur",
    phone: "0712-2528292 / 2538900 / 6542233",
    coordinates: [79.0833, 21.1539],
  },
  {
    name: "Govt. Medical College Blood Centre",
    address:
      "Incharge Blood Bank Govt. Medical College & Hospital, 2nd Floor, Nagpur-440003",
    phone: "0712-2744695",
    coordinates: [79.0783, 21.1438],
  },
  {
    name: "Central Blood Bank",
    address: "1st Floor, Parvati Towers, Indora Chowk, Kamptee Rd, Nagpur",
    phone: "641215",
    coordinates: [79.0622, 21.1442],
  },
  {
    name: "R.S.T Cancer Hospital Blood Bank",
    address: "Manewada Rd, Tukdoji Chowk, Nagpur",
    phone: "748155 / 744441",
    coordinates: [79.0656, 21.1269],
  },
  {
    name: "ESIS Hospital Blood Bank",
    address: "Medical Superintendent ESIS Hospital, Somwari peth, Nagpur",
    phone: "744767",
    coordinates: [79.0833, 21.1539],
  },
  {
    name: "Wankar Blood Bank",
    address: "Rajkamal Complex, Panchsheel SQR, Wardha Road, Nagpur-440012",
    phone: "0712-2523902",
    coordinates: [79.0456, 21.1419],
  },
  {
    name: "Shri Sainath Blood Bank & Components",
    address:
      "Manoj Bldg. 1st floor, opp Hotel Centre Point, Ramdaspeth, Nagpur-440010",
    phone: "0712-2452035",
    coordinates: [79.0783, 21.1438],
  },
];

// Add navigation control (zoom buttons)
bloodBanks.forEach((bank) => {
  const markerElement = document.createElement("div");
  markerElement.className = "custom-marker";

  const popupContent = `
        <h3>${bank.name}</h3>
        <p>${bank.address}</p>
        <p><strong>Phone:</strong> ${bank.phone}</p>`;

  const popup = new mapboxgl.Popup({ offset: [0, -15] }).setHTML(popupContent);

  new mapboxgl.Marker(markerElement)
    .setLngLat(bank.coordinates)
    .setPopup(popup)
    .addTo(map);

  // Hover effect for popup (optional)
  markerElement.addEventListener("mouseenter", () => popup.addTo(map));
  markerElement.addEventListener("mouseleave", () => popup.remove());
});
