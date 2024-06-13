// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// const MapComponent = () => {
//   const [position, setPosition] = useState([51.505, -0.09]); // Default position (London)
//   const [address, setAddress] = useState('');

//   const handleAddressChange = (e) => {
//     setAddress(e.target.value);
//   };

//   const geocodeAddress = () => {
//     fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`)
//       .then(response => response.json())
//       .then(data => {
//         if (data && data.length > 0) {
//           const location = data[0];
//           setPosition([location.lat, location.lon]);
//         } else {
//           alert('Address not found');
//         }
//       })
//       .catch(err => {
//         console.error(err);
//         alert('Error fetching location');
//       });
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           value={address}
//           onChange={handleAddressChange}
//           placeholder="Enter an address"
//         />
//         <button onClick={geocodeAddress}>Get Location</button>
//       </div>
//       <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position} icon={L.icon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png', iconSize: [25, 41], iconAnchor: [12, 41] })} />
//       </MapContainer>
//     </div>
//   );
// }

// export default MapComponent;
