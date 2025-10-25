import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './ShopLocation.css';

const ShopLocation = () => {
  const position = [51.505, -0.09]; // Default position

  return (
    <div className="shop-location">
      <h2>Our Location</h2>
      <div className="map-container">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Dezigna <br /> 123 Main Street, Anytown, USA 12345
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="address-container">
        <h3>Dezigna</h3>
        <p>123 Main Street</p>
        <p>Anytown, USA 12345</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
  );
};

export default ShopLocation;