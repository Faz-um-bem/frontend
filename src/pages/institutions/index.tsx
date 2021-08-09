import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useState } from 'react';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';
import { InstitutionItem } from '~/components/cards/InstitutionItem';

import {
  Container,
  Content,
  Heading,
  MapContainer,
  ListContainer,
} from '~/styles/institutions';

const InstitutionsMap = dynamic(
  () => import('~/components/maps/InstitutionsMap'),
  {
    ssr: false,
  },
);

// const mapIcon = Leaflet.icon({
//   iconUrl: '/imgs/marker.svg',
//   iconSize: [58, 68],
//   iconAnchor: [29, 68],
//   popupAnchor: [170, 2],
// });

export default function Institutions() {
  const { push } = useRouter();
  const [currentLocation, setCurrentLocation] = useState([
    -29.6984707, -53.8853061,
  ]);

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
      slug: 'testando-3333',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel',
      location: {
        latitude: -29.7063996,
        longitude: -53.818438,
      },
    },
  ];

  const handleGoToInstitution = useCallback(
    slug => {
      push(`/institutions/${slug}`);
    },
    [push],
  );

  // const handleCurrentPosition = position => {
  //   setCurrentLocation([position.coords.latitude, position.coords.longitude]);
  // };

  // navigator.geolocation.getCurrentPosition(handleCurrentPosition);

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
              onGoToInstitution={handleGoToInstitution}
              institutions={institutions}
            />
          </MapContainer>

          <ListContainer>
            {institutions.map(item => (
              <InstitutionItem
                key={String(item.id)}
                data={item}
                onClick={() => handleGoToInstitution('teste')}
              />
            ))}
          </ListContainer>
        </Content>

        <Footer />
      </Container>
    </>
  );
}
