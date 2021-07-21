import Head from 'next/head';
import { useCallback } from 'react';
import { HiDocumentSearch } from 'react-icons/hi';
import { FaBuilding } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';
import { OptionItem } from '~/components/OptionItem';

import { roles } from '~/utils/enum';
import { withSSRGuest } from '~/utils/withSSRGuest';

import { Container, Content, Items } from '~/styles/sign';

export default function Sign() {
  const router = useRouter();

  const handleCampaign = useCallback(
    (role: number) => {
      router.push({
        pathname: '/sign/in',
        query: { role },
      });
    },
    [router],
  );

  return (
    <>
      <Head>
        <title>Login | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <Items>
            <OptionItem
              label="Sou uma instituição"
              icon={FaBuilding}
              onClick={() => handleCampaign(roles.institution)}
            />
            <OptionItem
              label="Sou um(a) curador(a)"
              icon={HiDocumentSearch}
              onClick={() => handleCampaign(roles.curator)}
            />
          </Items>
        </Content>

        <Footer />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  };
});
