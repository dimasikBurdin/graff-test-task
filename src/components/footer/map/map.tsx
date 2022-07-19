import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import './map.css'
import L, { LatLng } from "leaflet";
import markerIcon from '../markerIcon.svg';

export const Map:React.FC = React.memo(() => {
  const position = new LatLng(56.838424, 60.603423);
    return <MapContainer center={position} zoom={13} scrollWheelZoom={true}>      
    <TileLayer    
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker 
      position={position} 
      icon={L.icon({iconUrl: markerIcon, iconSize:[25,40]}) as L.Icon<L.IconOptions>}
    >      
    </Marker>
  </MapContainer>
})