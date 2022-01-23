import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { subscribe } from "react-mqtt-client";
import "leaflet/dist/leaflet.css";
import "./customMap.css";
import RoutingLeafEl from "./RoutingMachine";

function CustomMap({ data }) {
  const [markers, setMarkers] = useState(data);
  const zoomLevel = 10;

  useEffect(() => {
    let mounted = true;
    mounted && setMarkers(data);

    return () => {
      mounted = false;
    };
  }, [data]);

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
      {markers?.length > 0 && <RoutingLeafEl markers={markers} />}
    </MapContainer>
  );
}

export default subscribe({ topic: "location" })(CustomMap);
