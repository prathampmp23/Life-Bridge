// Initialize the map
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [79.0802, 21.1458], // Nagpur coordinates
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
  {
    name: "Mure Memorial Hospital Blood Bank",
    address: "Maharaj Bagh Rd, Sitabuldi, Nagpur",
    phone: "0712-2523220",
    coordinates: [79.0879, 21.1527],
  },
  {
    name: "Ayush Blood Bank",
    address: "9th Floor, A wing, Lokmat Building, Nagpur-440010",
    phone: "0712-5618666",
    coordinates: [ 79.07995, 21.13639],
  },
  {
    name: "Lifeline Blood Bank Components & Apherisis Centre",
    address:
      "Neeti Gaurav complex, 2nd floor, Central Bazar road, Lokmat Square, Ramdaspeth, Nagpur-400010",
    phone: "0712-6618222",
    coordinates: [79.0849, 21.1466],
  },
  {
    name: "Rainbow Blood Bank",
    address: "282, Central Bazar Road, Ramdas Peth, Nagpur-10",
    phone: "0712-2528686",
    coordinates: [79.0819, 21.1446],
  },
  {
    name: "NKP Salve Inst. of Med. Sci. & Res. Center. Lata Mangeshkar Hosp, Blood Bank",
    address: "5, YMCA Complex, Digdoh Hills, Hingna Road, Nagpur-440019",
    phone: "07104-236290",
    coordinates: [79.0684, 21.0856],
  },
  {
    name: "Central India Institute of Haematology & Oncology's Blood & Blood Component Bank and Apheresis Unit",
    address:
      "Superspeciality Blood & Cancer Hospital, Plot No-14/2, Park Corner, Balraj Marg, Near Lokmat Square, Dhantoli, Nagpur-440012",
    phone: "0712-2430038",
    coordinates: [79.0819, 21.1446],
  },
  {
    name: "Nandkishor Education Society Trust, Arpan Voluntary Blood Bank",
    address:
      "1st floor, Indira Gandhi Rugnalaya, LAD Square, Gandhi Nagar, North Ambazari Road, Nagpur",
    phone: null,
    coordinates: [79.0939, 21.1646],
  },
  {
    name: "Ashirwad Medical Foundation's GSK Blood Bank & Components",
    address:
      "Plot No.1, Manoj Building, 1st floor, Besides Gurudwara, Central Bazaar Road, Ramdaspeth, Nagpur",
    phone: "0712-2420024",
    coordinates: [79.0819, 21.1446],
  },
  {
    name: "Aman Blood Bank",
    address:
      "2nd & 3rd floor, Chota Loharpura Masjid, Opp. H.P. Petrol pump, C.A. Road, Agrasen Chowk, Gandhibag, Nagpur",
    phone: "0712-2772219",
    coordinates: [79.0882, 21.1458],
  },
  {
    name: "Datta Meghe Medical College, Dattatraya Blood Bank",
    address:
      "Room No. 11, Ground floor, Wanadongri, Tehsil Hingna, Dist. Nagpur",
    phone: "9960618720",
    coordinates: [78.9983, 21.0716],
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
