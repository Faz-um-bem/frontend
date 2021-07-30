import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { FaChevronRight } from 'react-icons/fa';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import Leaflet from 'leaflet';

import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';
import { InstitutionCard } from '~/components/cards/InstitutionCard';

import {
  Container,
  Content,
  Heading,
  MapContainer,
  ListContainer,
} from '~/styles/institutions';

const mapIcon = Leaflet.icon({
  iconUrl: '/imgs/marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const InstitutionsMap = dynamic(
  () => import('~/components/maps/InstitutionsMap'),
  {
    ssr: false,
  },
);

export default function Institutions() {
  const { push } = useRouter();

  const institutions = [
    {
      id: 1,
      image: null,
      title: 'testando 123',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel',
      slug: 'teste-123',
      location: {
        latitude: -29.6987317,
        longitude: -53.8780534,
      },
    },
    {
      id: 2,
      image: null,
      title: 'testando 3333',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel',
      slug: 'teste-3333',
      location: {
        latitude: -29.7063996,
        longitude: -53.818438,
      },
    },
  ];

  const handleGoToInstitution = useCallback(
    (id, slug) => {
      push(`/institutions/${slug}`);
    },
    [push],
  );

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
    <>
      <Head>
        <title>Instituições | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <Heading>
            <div>
              <h1>Instituições cadastradas</h1>
              <p>
                Aqui você encontra e conhece todas as instituições que fazem um
                bem!
              </p>
            </div>
          </Heading>

          <MapContainer>
            <InstitutionsMap
              center={[-29.6984707, -53.8853061]}
              doubleClickZoom={false}
            >
              <LocationEvents />
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
                      onClick={() =>
                        handleGoToInstitution(place.id, place.slug)
                      }
                    >
                      <FaChevronRight size={20} color="#fff" />
                    </button>
                  </Popup>
                </Marker>
              ))}
            </InstitutionsMap>
          </MapContainer>

          <ListContainer>
            {institutions.map(item => (
              <InstitutionCard
                key={String(item.id)}
                data={item}
                onClick={() => handleGoToInstitution(1, 'teste')}
              />
            ))}
          </ListContainer>
        </Content>

        <Footer />
      </Container>
    </>
  );
}
