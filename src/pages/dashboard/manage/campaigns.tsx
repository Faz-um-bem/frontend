import { useState, useCallback } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { BsPlusCircleFill } from 'react-icons/bs';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

import { toast } from 'react-toastify';
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
import { api } from '~/services/apiClient';
import { useAuth } from '~/hooks/useAuth';

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
  status: number;
};

export default function ManageCampaign() {
  const { user } = useAuth();
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
    try {
      const response = await api.get<CampaignData[]>(
        `/institutions/${user.id}/campaigns`,
      );

      setCampaigns(response.data);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }, [user.id]);

  const handleUpdateCampaign = useCallback(async (data: CampaignData) => {},
  []);

  const handleCreateCampaign = useCallback(
    async (data: CampaignData) => {
      try {
        const response = await api.post(
          `/institutions/${user.id}/campaign`,
          data,
        );

        setCampaigns([...campaigns, response.data]);

        toast.success('Camanha enviada para auditagem');
      } catch (err) {
        toast.error(err.message);
      }
    },
    [user.id],
  );

  const handleDeleteCampaign = useCallback(async () => {}, []);

  const handleRejectModal = async () => {
    toggleModalCampaign();
    toggleModalReason();
  };

  const handleRejectCampaign = message => {
    toggleModalReason();
  };

  const handleAcceptCampaign = async () => {
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
