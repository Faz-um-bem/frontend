import {
  MapContainer,
  MapContainerProps,
  TileLayer,
  Marker,
} from 'react-leaflet';
import Leaflet from 'leaflet';

import { Container } from './styles';

const mapIcon = Leaflet.icon({
  iconUrl: `/imgs/marker.svg`,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

type MapProps = MapContainerProps & {
  interactive?: boolean;
};

export default function ViewMap({ interactive = true, ...rest }: MapProps) {
  return (
    <Container>
      <MapContainer
        center={[-29.7031818, -53.7027934]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
        scrollWheelZoom={false}
        dragging={interactive}
        touchZoom={interactive}
        zoomControl={interactive}
        doubleClickZoom={interactive}
        {...rest}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`}
        />
        <Marker icon={mapIcon} position={[-29.6987317, -53.8868081]} />
      </MapContainer>
    </Container>
  );
}
