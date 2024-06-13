import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Configure Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = () => {
    const defaultPosition = [29.3103, 30.8418]; // Fayoum coordinates
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [nearestAddress, setNearestAddress] = useState("");

    const addresses = [
        { name: "elgbily", lat: 29.313409, lon: 30.851320 },
        { name: "elezaby", lat: 29.317274, lon: 30.850580 }
        // Add more addresses if needed
    ];

    // Haversine formula to calculate distance between two points
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const toRadians = (degree) => (degree * Math.PI) / 180;
        const R = 6371; // Radius of the Earth in kilometers

        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

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
    };

    const MapClickHandler = () => {
        useMapEvents({
            click: (event) => {
                const lat = event.latlng.lat;
                const lon = event.latlng.lng;
                setSelectedPosition([lat, lon]);
                findNearestAddress(lat, lon);
            }
        });
        return null;
    };

    return (
        <div>
            <MapContainer center={defaultPosition} zoom={12} style={{ height: "400px", width: "100%" }}>
                <TileLayer
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
            {nearestAddress && (
                <div>
                    <h4>Nearest Address:</h4>
                    <p>{nearestAddress}</p>
                </div>
            )}
        </div>
    );
};

export default MapComponent;
