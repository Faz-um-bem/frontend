import Head from 'next/head';
import React from 'react';
import { HiDocumentSearch } from 'react-icons/hi';
import { FaBuilding } from 'react-icons/fa';
import { useRouter } from 'next/router';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { OptionItem } from '../../components/OptionItem';

import { Container, Content, Items } from './styles';
import { roles } from '../../util/enum';

export default function Sign() {
  const router = useRouter();

  const handleCampaign = (role: number) => {
    router.push({
      pathname: '/sign/in',
      query: { role },
    });
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
