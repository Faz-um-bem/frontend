import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { Container } from "./styles";

const Map: React.FC = () => {
  return (
    <Container>
      <MapContainer
        center={[-29.6987317, -53.8780534]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`}
        />
      </MapContainer>
    </Container>
  );
};

export default Map;
