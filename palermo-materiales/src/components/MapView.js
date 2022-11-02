import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import UbiNaranja from '../assets/img/icon-ubicacion.svg'
import  L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
    var myIcon = L.icon({
    iconUrl: UbiNaranja,
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'my-icon-shadow.png',
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
});
    return <MapContainer center={[-34.587042395649874, -58.436573260808515]} zoom={50} scrollWheelZoom={false} className="map-container">
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-34.587042395649874, -58.436573260808515]} icon={myIcon}>
                <Popup>
                    <a href="https://g.page/palermo-materiales?share" target="_blank" rel="noopener">Abrir ubicación</a>
                </Popup>
                </Marker>
            </MapContainer>
}
export default MapView