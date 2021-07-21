import { useState, useCallback } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { BsPlusCircleFill } from 'react-icons/bs';

import { useEffect } from 'react';
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

type CampaignData = {
  id: number;
  title: string;
  description: string;
  address: string;
  address_number: string;
  address_complement: string;
  neighborhood: string;
  postal_code: string;
  state: string;
  city: string;
  address_latitude: string;
  address_longitude: string;
  status: 'active' | 'inactive' | 'draft' | 'refused' | null;
};

export default function ManageCampaign() {
  const [campaigns, setCampaigns] = useState<CampaignData[]>([]);

  const [isCreateNewCampaignOpen, setIsCreateNewCampaignOpen] = useState(false);
  const [modalData, setModalData] = useState<CampaignData>(null);

  const handleCreateNewCampaignOpen = useCallback(() => {
    setModalData(null);
    setIsCreateNewCampaignOpen(true);
  }, []);

  const handleCreateNewCampaignClose = useCallback(() => {
    setIsCreateNewCampaignOpen(false);
  }, []);

  const handleEditCampaignModalOpen = useCallback((data: CampaignData) => {
    setModalData(data);
    setIsCreateNewCampaignOpen(true);
  }, []);

  const loadCampaigns = useCallback(async () => {
    const response: CampaignData[] = [
      {
        id: 1,
        title: 'Campanha 1',
        description: 'Descrição da campanha 1',
        address: 'Endereço tal',
        address_number: '10',
        address_complement: 'complemento',
        neighborhood: 'Bairro tal',
        postal_code: '970000000',
        state: 'RS',
        city: 'Santa Maria',
        address_latitude: '111111111111',
        address_longitude: '2222222222',
        status: 'active',
      },
      {
        id: 2,
        title: 'Campanha 1',
        description: 'Descrição da campanha 1',
        address: 'Endereço tal',
        address_number: '10',
        address_complement: 'complemento',
        neighborhood: 'Bairro tal',
        postal_code: '970000000',
        state: 'RS',
        city: 'Santa Maria',
        address_latitude: '111111111111',
        address_longitude: '2222222222',
        status: 'draft',
      },
      {
        id: 3,
        title: 'Campanha 1',
        description: 'Descrição da campanha 1',
        address: 'Endereço tal',
        address_number: '10',
        address_complement: 'complemento',
        neighborhood: 'Bairro tal',
        postal_code: '970000000',
        state: 'RS',
        city: 'Santa Maria',
        address_latitude: '111111111111',
        address_longitude: '2222222222',
        status: 'active',
      },
      {
        id: 4,
        title: 'Campanha 1',
        description: 'Descrição da campanha 1',
        address: 'Endereço tal',
        address_number: '10',
        address_complement: 'complemento',
        neighborhood: 'Bairro tal',
        postal_code: '970000000',
        state: 'RS',
        city: 'Santa Maria',
        address_latitude: '111111111111',
        address_longitude: '2222222222',
        status: 'active',
      },
    ];

    setCampaigns(response);
  }, []);

  const handleUpdateCampaign = useCallback(async (data: CampaignData) => {},
  []);
  const handleCreateCampaign = useCallback(async (data: CampaignData) => {},
  []);
  const handleDeleteCampaign = useCallback(async (id: number) => {}, []);

  useEffect(() => {
    loadCampaigns();
  }, [loadCampaigns]);

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
            {campaigns.map(campaign => (
              <CardListItem
                key={String(campaign.id)}
                campaign={campaign}
                onClick={() => handleEditCampaignModalOpen(campaign)}
              />
            ))}
          </CampaignList>
        </Content>

        <Footer />
      </Container>

      <NewCampaigModal
        isOpen={isCreateNewCampaignOpen}
        onRequestClose={handleCreateNewCampaignClose}
        data={modalData}
        onCreate={handleCreateCampaign}
        onUpdate={handleUpdateCampaign}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
