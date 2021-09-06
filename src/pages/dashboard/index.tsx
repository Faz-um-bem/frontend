import { Fragment } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FiBell, FiEdit, FiImage, FiList } from 'react-icons/fi';
import { FaRegBuilding, FaUsers } from 'react-icons/fa';
import { HiOutlineClipboardCheck } from 'react-icons/hi';

import { Header } from '~/components/Header';
import { OptionItem } from '~/components/cards/OptionItem';
import { Footer } from '~/components/Footer';

import { useCan } from '~/hooks/useCan';

import { withSSRAuth } from '~/utils/withSSRAuth';
import { permissions, roles } from '~/utils/enum';

import { Container, Content, OptionList } from '~/styles/dashboard';

export default function Dashboard() {
  const router = useRouter();

  const userCanSeeCurators = useCan({ permission: permissions.administrator });
  const userCanSeeInstitutionOptions = useCan({ role: roles.institution });

  function handleSubmit(url: string) {
    router.push(url);
  }

  const institutionItems = [
    <OptionItem
      label="Editar Perfil"
      icon={FiEdit}
      onClick={() => handleSubmit('/dashboard/manage/institution/profile')}
    />,
    <OptionItem
      label="Gerenciar Campanhas"
      icon={FiList}
      onClick={() => handleSubmit('/dashboard/manage/institution/campaigns')}
    />,
    <OptionItem
      label="Gerenciar Galeria"
      icon={FiImage}
      onClick={() => handleSubmit('/dashboard/manage/institution/gallery')}
    />,
    <OptionItem
      label="Histórico de Atualizações"
      icon={FiBell}
      onClick={() => handleSubmit('/dashboard/history')}
      disabled
    />,
  ];

  const curatorItems = [
    <OptionItem
      label="Editar Perfil"
      icon={FiEdit}
      onClick={() => handleSubmit('/dashboard/manage/curator/profile')}
    />,
    <OptionItem
      label="Gerenciar Curadores"
      icon={FaUsers}
      onClick={() => handleSubmit('/dashboard/manage/curator/curators')}
      disabled={!userCanSeeCurators}
    />,
    <OptionItem
      label="Auditar Instituições"
      icon={FaRegBuilding}
      onClick={() => handleSubmit('/dashboard/manage/curator/institutions')}
    />,
    <OptionItem
      label="Auditar Campanhas"
      icon={HiOutlineClipboardCheck}
      onClick={() => handleSubmit('/dashboard/manage/curator/campaigns')}
    />,
  ];

  return (
    <>
      <Head>
        <title>Painel do usuário | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <OptionList>
            {userCanSeeInstitutionOptions
              ? institutionItems.map((item, index) => (
                  <Fragment key={String(index)}>{item}</Fragment>
                ))
              : curatorItems.map((item, index) => (
                  <Fragment key={String(index)}>{item}</Fragment>
                ))}
          </OptionList>
        </Content>

        <Footer />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
