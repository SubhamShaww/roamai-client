import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { subscribe } from "react-mqtt-client";
import "leaflet/dist/leaflet.css";
import "./customMap.css";
import RoutingLeafEl from "./RoutingMachine";

function CustomMap({ data }) {
  const zoomLevel = 10;

  return (
    <MapContainer
      center={
        data?.length > 0
          ? data[0].geometry.coordinates
          : [22.569950998203502, 88.37333679199219]
      }
      zoom={zoomLevel}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data?.length > 0 && <RoutingLeafEl markers={data} />}
    </MapContainer>
  );
}

export default subscribe({ topic: "location" })(CustomMap);
