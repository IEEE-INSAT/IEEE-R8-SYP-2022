import React from "react";
import './Location.css';

import L from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const pinIcon = L.icon({
        iconUrl: require('../../assets/images/CapitalPin.png'),
        iconSize: [18, 45]
    }
)
export default function Location() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    return (
        <div className={"Location"}>
            <h4>EVENT LOCATION</h4>
            <h2>Location</h2>
            <div id="map">
                <MapContainer center={[34.972, 9.575]} zoom={windowWidth > 480 || windowHeight > 1000 ? 7 : 6}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
                    />
                    <Marker position={[36.8001, 10.1864]} icon={pinIcon}>
                        <Popup>
                            Add info about Tunis here <br/> Remove if unnecessary
                        </Popup>
                    </Marker>
                    <Marker position={[36.4047, 10.6191]}>
                        <Popup>
                            Add info about Tunis here <br/> Remove if unnecessary
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}