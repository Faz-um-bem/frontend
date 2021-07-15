import Head from 'next/head';
import React from 'react';
import { HiDocumentSearch } from 'react-icons/hi';
import { FaBuilding } from 'react-icons/fa';
import { useRouter } from 'next/router';

import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import OptionItem from '../../components/OptionItem';

import { Container, Content, Items } from './styles';

export default function sign() {
  const router = useRouter();

  const handleCampaign = (type: string) => {
    router.push(`/sign/${type}/signin`);
  };

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
              onClick={() => handleCampaign('institution')}
            />
            <OptionItem
              label="Sou um(a) curador(a)"
              icon={HiDocumentSearch}
              onClick={() => handleCampaign('curator')}
            />
          </Items>
        </Content>

        <Footer />
      </Container>
    </>
  );
}
