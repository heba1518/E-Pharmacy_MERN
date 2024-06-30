import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Configure Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapComponent = ({ onValueChange }) => {
  const defaultPosition = [29.3103, 30.8418]; // Fayoum coordinates
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [nearestAddress, setNearestAddress] = useState("");

  const addresses = [
    { name: "Elghbili", lat: 29.313409, lon: 30.85132 },
    { name: "El Ezaby", lat: 29.311442, lon: 30.840879 },
  ];

  // Haversine formula to calculate distance between two points
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degree) => (degree * Math.PI) / 180;
    const R = 6371; // Radius of the Earth in kilometers

    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in kilometers
  };

  // Find the nearest address from the list
  const findNearestAddress = (lat, lon) => {
    let minDistance = Number.MAX_SAFE_INTEGER;
    let nearestAddress = "";

    addresses.forEach((address) => {
      const distance = calculateDistance(lat, lon, address.lat, address.lon);
      if (distance < minDistance) {
        minDistance = distance;
        nearestAddress = address.name;
      }
    });

    setNearestAddress(nearestAddress);
    onValueChange(nearestAddress)
  };

  const MapClickHandler = () => {
    useMapEvents({
      click: (event) => {
        const lat = event.latlng.lat;
        const lon = event.latlng.lng;
        setSelectedPosition([lat, lon]);
        findNearestAddress(lat, lon);
      },
    });
    return null;
  };

  return (
    <div style={{
      zIndex: 1,
      overflow: 'hidden',
        width: '75%',
        margin: '40px auto',
        border: '2px solid #4DB6AC', // Border color to match the theme
        borderRadius: '15px', // Rounded corners
        overflow: 'hidden', // Ensure the rounded corners cut off content
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Adds a shadow for a frame effect
       
    }}>
      <MapContainer
        center={defaultPosition}
        zoom={12}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
        style={{zIndex: 1,overflow: 'hidden',}}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        {selectedPosition && (
          <Marker position={selectedPosition}>
            <Popup>{`Selected Position: ${selectedPosition}`}</Popup>
          </Marker>
        )}
        <MapClickHandler />
      </MapContainer>

    </div>
  );
};

export default MapComponent;
