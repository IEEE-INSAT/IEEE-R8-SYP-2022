import React from 'react';
import './Location.css';

import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const pinIcon = L.icon({
    iconUrl: require('../../assets/images/CapitalPin.png'),
    iconSize: [18, 45],
});
export default function Location() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    return (
        <div className={'Location'}>
            <h4>EVENT LOCATION</h4>
            <h2>Location</h2>
            <div id="map">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d880458.4427307894!2d10.132420694009932!3d36.45816594972644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34c6d1e93bef%3A0x4153c4733f285343!2sNational%20Institute%20of%20Applied%20Science%20and%20Technology!5e0!3m2!1sen!2stn!4v1650384403836!5m2!1sen!2stn" 
                width="100%" height="100%" style={{ border:0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
        </div>
    );
}
