import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

type MapSelectProps = {
  position: LatLngExpression;
  onChangePosition(latlng: LatLngExpression): void;
};

export default function MapSelect({
  position,
  onChangePosition,
}: MapSelectProps) {
  function LocationMarker() {
    useMapEvents({
      click(e) {
        onChangePosition(e.latlng);
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }
  return (
    <MapContainer
      center={[-29.6987317, -53.8780534]}
      zoom={13}
      style={{ width: '100%', height: '100%', borderRadius: 'inherit' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`}
      />
      <LocationMarker />
    </MapContainer>
  );
}
