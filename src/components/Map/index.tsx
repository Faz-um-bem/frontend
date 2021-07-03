import React from "react";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";

import "leaflet/dist/leaflet.css";

import { Container } from "./styles";

const mapIcon = Leaflet.icon({
  iconUrl: 'imgs/marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

type Location = {
  latitude: number;
  longitude: number;
}

type Place = {
  id: string;
  name: string;
  slug: string;
  location: Location;
}

type MapProps = {
  initialLocation: Location;
  places?: Place[];
}


export default function Map({ initialLocation, places = [] }: MapProps) {
  return (
    <Container>
      <MapContainer
        // center={[-29.6987317, -53.8780534]}
        center={[initialLocation?.latitude || 0, initialLocation?.longitude || 0]}
        zoom={13}
        style={{ width: "100%", height: "100%", borderRadius: "inherit" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`}
        />

        {places?.map(place => (
          <Marker key={place.id} icon={mapIcon} position={[place.location.latitude, place.location.longitude]}>
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {[place.name]}

              <Link href={`/institution/${place.slug}`}>
                >
              </Link>
            </Popup>
          </Marker>
        ))}

        {/* <Marker icon={mapIcon} position={[-29.6987317, -53.8780534]}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Teste

            <Link href="/institution">
              >
            </Link>
          </Popup>
        </Marker>

        <Marker icon={mapIcon} position={[-29.7063996, -53.818438]}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Teste

            <Link href="/institution">
              >
            </Link>
          </Popup>
        </Marker> */}
      </MapContainer>
    </Container>
  );
};
