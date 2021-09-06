import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { BsPlusCircleFill } from 'react-icons/bs';

import { ListItem } from '~/components/cards/ListItem';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { useCan } from '~/hooks/useCan';
import { permissions } from '~/utils/enum';

import { withSSRAuth } from '~/utils/withSSRAuth';

import {
  Container,
  CampaignList,
  Content,
} from '~/styles/dashboard/manage/curator/curators';
import { CuratorModal } from '~/components/modal/CuratorModal';

export default function ManageInstitutions() {
  const router = useRouter();
  const userCanSeePage = useCan({ permission: permissions.administrator });
  const [curators, setCurators] = useState([
    {
      id: 1,
      title: 'Wederson Fagundes',
      email: 'wederson@example.com',
      permission: 1,
    },
    {
      id: 2,
      title: 'Pedro Andrade',
      email: 'pedro@example.com',
      permission: 1,
    },
    {
      id: 3,
      title: 'Greice Pettine',
      email: 'greice@example.com',
      permission: 2,
    },
    {
      id: 4,
      title: 'Josué Veleda',
      email: 'josue@example.com',
      permission: 2,
    },
  ]);
  const [modalCuratorInfo, setModalCuratorInfo] = useState({});
  const [modalCuratorIsVisible, setModalCuratorIsVisible] = useState(false);

  const toggleModalCurator = () =>
    setModalCuratorIsVisible(currentValue => !currentValue);

  const handleModalCuratorOpen = info => {
    setModalCuratorInfo(info);
    toggleModalCurator();
  };

  const handleModalCuratorClose = () => {
    setModalCuratorInfo({});
    toggleModalCurator();
  };

  useEffect(() => {
    if (!userCanSeePage) {
      router.push('/error');
    }
  }, [userCanSeePage, router]);

  return (
    <>
      <Head>
        <title>Gerenciar Curadores | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <header>
            <h1>Gerenciar Curadores</h1>
            <button type="button" onClick={() => handleModalCuratorOpen(null)}>
              <BsPlusCircleFill size={24} />
            </button>
          </header>

          <CampaignList>
            {curators.map(curator => (
              <ListItem
                key={String(curator.id)}
                data={curator}
                onClick={() => handleModalCuratorOpen(curator)}
              />
            ))}
          </CampaignList>
        </Content>

        <Footer />
      </Container>

      <CuratorModal
        data={modalCuratorInfo}
        isOpen={modalCuratorIsVisible}
        onRequestClose={handleModalCuratorClose}
        onDelete={() => {}}
        onSubmit={() => {}}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
