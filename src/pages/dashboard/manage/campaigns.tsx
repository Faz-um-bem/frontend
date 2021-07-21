import { useState, useCallback } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { BsPlusCircleFill } from 'react-icons/bs';

import { CardListItem } from '~/components/CardListItem';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { NewCampaigModal } from '~/components/modal/NewCampaigModal';

import { withSSRAuth } from '~/utils/withSSRAuth';

import {
  Container,
  CampaignList,
  Content,
} from '~/styles/dashboard/manage/campaigns';

export default function ManageCampaign() {
  const [isCreateNewCampaignOpen, setIsCreateNewCampaignOpen] = useState(false);
  // const [modalData, setModalData] = useState({});

  const handleCreateNewCampaignOpen = useCallback(() => {
    setIsCreateNewCampaignOpen(true);
  }, []);

  const handleCreateNewCampaignClose = useCallback(() => {
    setIsCreateNewCampaignOpen(false);
  }, []);

  // const handleEditCampaign = useCallback(data => {
  //   setModalData(data);
  //   setIsCreateNewCampaignOpen(true);
  // }, []);

  return (
    <>
      <Head>
        <title>Gerênciar Campanhas | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <header>
            <h1>Gerênciar Campanhas</h1>
            <button type="button" onClick={handleCreateNewCampaignOpen}>
              <BsPlusCircleFill size={25} />
            </button>
          </header>

          <CampaignList>
            <CardListItem
              title="teste1"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="active"
            />
            <CardListItem
              title="teste2"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="draft"
            />
            <CardListItem
              title="teste3"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="active"
            />
            <CardListItem
              title="teste4"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="active"
            />
            <CardListItem
              title="teste5"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="active"
            />
          </CampaignList>
        </Content>

        <Footer />
      </Container>

      <NewCampaigModal
        isOpen={isCreateNewCampaignOpen}
        onRequestClose={handleCreateNewCampaignClose}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
