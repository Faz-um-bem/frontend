import Head from 'next/head';
import React from 'react';
import { HiDocumentSearch } from 'react-icons/hi';
import { FaBuilding } from 'react-icons/fa';

import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import OptionItem from '../../components/OptionItem';

import { Container, Content, Items } from './styles';

export default function sign() {
  return (
    <>
      <Head>
        <title>Login | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <Items>
            <OptionItem label="Sou uma instituição" icon={FaBuilding} />
            <OptionItem label="Sou um(a) curador(a)" icon={HiDocumentSearch} />
          </Items>
        </Content>

        <Footer />
      </Container>
    </>
  );
}
