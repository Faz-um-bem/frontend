import { GetServerSideProps } from 'next';
import { useState } from 'react';
import Head from 'next/head';

import { ListItem } from '~/components/cards/ListItem';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { InstitutionModal } from '~/components/modal/InstitutionModal';
import { AuditorMessageModal } from '~/components/modal/AuditorMessageModal';

import { useCan } from '~/hooks/useCan';

import { withSSRAuth } from '~/utils/withSSRAuth';
import { roles } from '~/utils/enum';

import {
  Container,
  CampaignList,
  Content,
} from '~/styles/dashboard/manage/institutions';

type InstitutionData = {
  id: number;
  title: string;
  description: string;
  status: 'active' | 'draft' | 'inactive' | 'refused' | null;
};

export default function ManageInstitutions() {
  const userIsCurator = useCan({ role: roles.curator });

  const [institutions, setInstitutions] = useState<InstitutionData[]>([
    {
      id: 1,
      title: 'teste1',
      description:
        'HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA',
      status: 'active',
    },
    {
      id: 2,
      title: 'teste2',
      description:
        'HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA',
      status: 'draft',
    },
    {
      id: 3,
      title: 'teste3',
      description:
        'HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA',
      status: 'active',
    },
    {
      id: 4,
      title: 'teste4',
      description:
        'HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA',
      status: 'active',
    },
  ]);
  const [modalInstitutionInfo, setModalInstitutionInfo] = useState({});

  const [modalInstitutionIsVisible, setModalInstitutionIsVisible] =
    useState(false);
  const [modalReasonIsVisible, setModalReasonIsVisible] = useState(false);

  const toggleModalInstitution = () =>
    setModalInstitutionIsVisible(currentValue => !currentValue);
  const toggleModalReason = () =>
    setModalReasonIsVisible(currentValue => !currentValue);

  const handleModalInstitutuionOpen = info => {
    setModalInstitutionInfo(info);
    toggleModalInstitution();
  };

  const handleModalInstitutionClose = () => {
    setModalInstitutionInfo({});
    toggleModalInstitution();
  };

  const handleRejectModal = () => {
    toggleModalInstitution();
    toggleModalReason();
  };

  const handleRejectInstitution = message => {
    toggleModalReason();
  };

  const handleAcceptInstitution = () => {
    handleModalInstitutionClose();
  };

  return (
    <>
      <Head>
        <title>
          {userIsCurator ? 'Auditar Instituições' : 'Gerenciar Instituições'} |
          Faz um bem!
        </title>
      </Head>

      <Container>
        <Header />

        <Content>
          <h1>
            {userIsCurator ? 'Auditar Instituições' : 'Gerenciar Instituições'}
          </h1>

          <CampaignList>
            {institutions.map(institution => (
              <ListItem
                key={institution.id}
                data={institution}
                onClick={() => handleModalInstitutuionOpen(institution)}
              />
            ))}
          </CampaignList>
        </Content>

        <Footer />
      </Container>

      <InstitutionModal
        data={modalInstitutionInfo}
        isOpen={modalInstitutionIsVisible}
        onRequestClose={handleModalInstitutionClose}
        onAccept={handleAcceptInstitution}
        onReject={handleRejectModal}
      />

      <AuditorMessageModal
        isOpen={modalReasonIsVisible}
        onRequestClose={toggleModalReason}
        onSubmit={handleRejectInstitution}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
