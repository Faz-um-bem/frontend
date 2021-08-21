import {
  MapContainer,
  MapContainerProps,
  TileLayer,
  Marker,
  useMapEvents,
} from 'react-leaflet';
import Leaflet, { LatLngExpression } from 'leaflet';

import { Container } from './styles';

const mapIcon = Leaflet.icon({
  iconUrl: `/imgs/marker.svg`,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

type MapProps = MapContainerProps & {
  center?: Array<number>;
  interactive?: boolean;
  markerPosition: LatLngExpression | null;
  onChangeMakerPosition: (pos: LatLngExpression) => void;
};

export default function Map({
  center = [-29.7031818, -53.7027934],
  interactive = true,
  markerPosition,
  onChangeMakerPosition,
  ...rest
}: MapProps) {
  const LocationEvents = () => {
    useMapEvents({
      click(e) {
        onChangeMakerPosition(e.latlng);
      },
    });
    return markerPosition ? (
      <Marker position={markerPosition} icon={mapIcon} />
    ) : null;
  };

  return (
    <Container>
      <MapContainer
        center={center}
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
        {interactive && <LocationEvents />}
        {!interactive && markerPosition && (
          <Marker position={markerPosition} icon={mapIcon} />
        )}
      </MapContainer>
    </Container>
  );
}
