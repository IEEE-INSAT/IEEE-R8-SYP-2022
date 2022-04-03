import React from "react";
import './Home.css';
import L from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

export default function Home() {

    const pinIcon = L.icon({
            iconUrl: require('../../assets/img/CapitalPin.png'),
            iconSize: [20, 45]
        }
    )
    return (

        <div className={"Location"}>
            <h4>EVENT LOCATION</h4>
            <h2>Location</h2>
            <div id="map">
                <MapContainer center={[36.8001, 10.1864]} zoom={7}>
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
    )
}