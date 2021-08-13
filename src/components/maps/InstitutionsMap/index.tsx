import { FaChevronRight } from 'react-icons/fa';
import {
  MapContainer,
  MapContainerProps,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import Leaflet from 'leaflet';

import { Container } from './styles';

const mapIcon = Leaflet.icon({
  iconUrl: '/imgs/marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

type InstitutionData = {
  id: number;
  image: string | null;
  title: string;
  slug: string;
  description: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

type MapProps = MapContainerProps & {
  interactive?: boolean;
  institutions: InstitutionData[];
  onGoToInstitution: (slug: string) => void;
};

export default function Map({
  interactive = true,
  institutions,
  onGoToInstitution,
  ...rest
}: MapProps) {
  const LocationEvents = () => {
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        map.flyTo(e.latlng, map.getZoom());
      },
    });
    return null;
  };

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
        <LocationEvents />
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`}
        />
        {institutions?.map(place => (
          <Marker
            key={place.id}
            icon={mapIcon}
            position={[place.location.latitude, place.location.longitude]}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {[place.title]}

              <button
                type="button"
                onClick={() => onGoToInstitution(place.slug)}
              >
                <FaChevronRight size={20} color="#fff" />
              </button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Container>
  );
}
