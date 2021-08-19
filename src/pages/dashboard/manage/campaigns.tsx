import { useState, useCallback } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { BsPlusCircleFill } from 'react-icons/bs';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

import { ListItem } from '~/components/cards/ListItem';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { AuditorMessageModal } from '~/components/modal/AuditorMessageModal';

import { withSSRAuth } from '~/utils/withSSRAuth';

import {
  Container,
  CampaignList,
  Content,
} from '~/styles/dashboard/manage/campaigns';

import { useCan } from '~/hooks/useCan';
import { roles } from '~/utils/enum';

const CampaigModal = dynamic(() => import('~/components/modal/CampaigModal'), {
  ssr: false,
});

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
  const userIsCurator = useCan({ role: roles.curator });

  const [campaigns, setCampaigns] = useState<CampaignData[]>([]);

  const [isCreateNewCampaignOpen, setIsCreateNewCampaignOpen] = useState(false);
  const [modalReasonIsVisible, setModalReasonIsVisible] = useState(false);

  const [modalData, setModalData] = useState<CampaignData>(null);

  const toggleModalReason = () =>
    setModalReasonIsVisible(currentValue => !currentValue);
  const toggleModalCampaign = () =>
    setIsCreateNewCampaignOpen(currentValue => !currentValue);

  const handleCreateNewCampaignOpen = useCallback(() => {
    setModalData(null);
    toggleModalCampaign();
  }, []);

  const handleCreateNewCampaignClose = useCallback(() => {
    toggleModalCampaign();
  }, []);

  const handleEditCampaignModalOpen = useCallback((data: CampaignData) => {
    setModalData(data);
    toggleModalCampaign();
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
  const handleDeleteCampaign = useCallback(async () => {}, []);

  const handleRejectModal = () => {
    toggleModalCampaign();
    toggleModalReason();
  };

  const handleRejectCampaign = message => {
    toggleModalReason();
  };

  const handleAcceptCampaign = () => {
    toggleModalCampaign();
  };

  useEffect(() => {
    loadCampaigns();
  }, [loadCampaigns]);

  return (
    <>
      <Head>
        <title>
          {userIsCurator ? 'Auditar Campanhas' : 'Gerenciar Campanhas'} | Faz um
          bem!
        </title>
      </Head>

      <Container>
        <Header />

        <Content>
          <header>
            <h1>
              {userIsCurator ? 'Auditar Campanhas' : 'Gerenciar Campanhas'}
            </h1>
            {!userIsCurator && (
              <button type="button" onClick={handleCreateNewCampaignOpen}>
                <BsPlusCircleFill size={24} />
              </button>
            )}
          </header>

          <CampaignList>
            {campaigns.map(campaign => (
              <ListItem
                key={String(campaign.id)}
                data={campaign}
                onClick={() => handleEditCampaignModalOpen(campaign)}
              />
            ))}
          </CampaignList>
        </Content>

        <Footer />
      </Container>

      <CampaigModal
        isOpen={isCreateNewCampaignOpen}
        onRequestClose={handleCreateNewCampaignClose}
        data={modalData}
        onCreate={handleCreateCampaign}
        onUpdate={handleUpdateCampaign}
        onDelete={handleDeleteCampaign}
        onAccept={handleAcceptCampaign}
        onReject={handleRejectModal}
        isAuditing={userIsCurator}
      />

      <AuditorMessageModal
        isOpen={modalReasonIsVisible}
        onRequestClose={toggleModalReason}
        onSubmit={handleRejectCampaign}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
