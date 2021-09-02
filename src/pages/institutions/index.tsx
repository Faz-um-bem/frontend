import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useState } from 'react';
import { GetServerSideProps } from 'next';
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
import { api } from '~/services/apiClient';

const InstitutionsMap = dynamic(
  () => import('~/components/maps/InstitutionsMap'),
  {
    ssr: false,
  },
);

type InstitutionData = {
  id: number;
  name: string;
  description: string;
  logo?: string;
  slug: string;
};

type InstitutionsProps = {
  institutionsData: Array<InstitutionData>;
};

export default function Institutions({ institutionsData }: InstitutionsProps) {
  const { push } = useRouter();
  const [currentLocation, setCurrentLocation] = useState([
    -29.6984707, -53.8853061,
  ]);

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
              institutions={institutionsData}
            />
          </MapContainer>

          <ListContainer>
            {institutionsData.map(item => (
              <InstitutionItem
                key={String(item.id)}
                data={item}
                onClick={() => handleGoToInstitution(item.slug)}
              />
            ))}
          </ListContainer>
        </Content>

        <Footer />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('/institutions');

  return {
    props: {
      institutionsData: response.data.data.data,
    },
  };
};
