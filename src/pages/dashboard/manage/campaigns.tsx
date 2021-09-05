import { useState, useCallback } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { BsPlusCircleFill } from 'react-icons/bs';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

import { FaSearch } from 'react-icons/fa';

import { toast } from 'react-toastify';
import { ListItem } from '~/components/cards/ListItem';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';

import { withSSRAuth } from '~/utils/withSSRAuth';

import {
  Container,
  CampaignList,
  Content,
  FilterContainer,
  InputContent,
  SelectContent,
  ButtonContent,
} from '~/styles/dashboard/manage/campaigns';

import { api } from '~/services/apiClient';
import { useAuth } from '~/hooks/useAuth';
import { campaignStatus } from '~/utils/enum/campaign';

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
  logo: string;
};

type ResponseData = {
  data: CampaignData[];
  message: string;
};

export default function ManageCampaign() {
  const { user } = useAuth();

  const [campaigns, setCampaigns] = useState<CampaignData[]>([]);
  const [isCreateNewCampaignOpen, setIsCreateNewCampaignOpen] = useState(false);
  const [modalData, setModalData] = useState<CampaignData>(null);
  const [title, setTitle] = useState<string>('');
  const [status, setStatus] = useState(null);

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
      const response = await api.get<ResponseData>(
        `/institutions/${user.id}/campaigns`,
        {
          title,
          status: status !== 0 ? status : null,
        },
      );

      setCampaigns(response.data.data);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }, [user.id]);

  const handleUpdateCampaign = useCallback(
    async (data: CampaignData, id: number) => {
      try {
        const response = await api.put(
          `/institutions/${user.id}/campaign/${id}`,
          data,
        );

        const attCampaign = campaigns.map(c =>
          c.id === response.data.id ? response.data.data : c,
        );

        setCampaigns(attCampaign);
        toast.success('Atualização enviada');
        toggleModalCampaign();
      } catch (err) {
        toast.error(err.response.data.message);
      }
    },
    [campaigns, user.id],
  );

  const handleCreateCampaign = useCallback(
    async (data: CampaignData) => {
      try {
        const response = await api.post(
          `/institutions/${user.id}/campaign`,
          data,
        );

        console.log(response);
        setCampaigns([...campaigns, response.data.data.data]);
        toast.success('Campanha enviada para auditagem');
        toggleModalCampaign();
      } catch (err) {
        toast.error(err.response.data.message);
      }
    },
    [campaigns, user],
  );

  const handleDeleteCampaign = useCallback(
    async id => {
      try {
        await api.put(`/institutions/${user.id}/campaign/${id}`);

        const attCampaign = campaigns.filter(c => c.id !== id);

        setCampaigns(attCampaign);

        toast.success('Campanha removida');

        toggleModalCampaign();
      } catch (err) {
        toast.error(err.response.data.message);
      }
    },
    [campaigns, user.id],
  );

  useEffect(() => {
    loadCampaigns();
  }, [loadCampaigns]);

  return (
    <>
      <Head>
        <title>Gerenciar Campanhas | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <header>
            <h1>Gerenciar Campanhas</h1>

            <button type="button" onClick={handleCreateNewCampaignOpen}>
              <BsPlusCircleFill size={24} />
            </button>
          </header>

          <FilterContainer>
            <InputContent
              icon={FaSearch}
              placeholder="Titulo"
              name="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <SelectContent
              name="status"
              value={status}
              onChange={e => setStatus(e.target.value)}
            >
              <option value="0">Status</option>
              <option value="0">Todos</option>
              <option value={campaignStatus.approved}>Aprovada</option>
              <option value={campaignStatus.inactive}>Inativa</option>
              <option value={campaignStatus.refused}>Recusada</option>
              <option value={campaignStatus.underReview}>Revisão</option>
            </SelectContent>

            <ButtonContent>Pesquisar</ButtonContent>
          </FilterContainer>

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
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
