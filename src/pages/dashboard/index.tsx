import Head from 'next/head';
import { useRouter } from 'next/router';
import { FiBell, FiEdit, FiImage, FiList } from 'react-icons/fi';

import { Fragment } from 'react';
import { FaRegBuilding, FaUsers } from 'react-icons/fa';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import { Header } from '../../components/Header';
import { OptionItem } from '../../components/OptionItem';
import { Footer } from '../../components/Footer';

import { Container, Content, OptionList } from './styles';

export default function Dashboard() {
  const router = useRouter();

  function handleSubmit(url: string) {
    router.push(url);
  }

  const institutionItems = [
    <OptionItem
      label="Editar Perfil"
      icon={FiEdit}
      onClick={() => handleSubmit('/dashboard/manage/profile')}
    />,
    <OptionItem
      label="Gerênciar Campanhas"
      icon={FiList}
      onClick={() => handleSubmit('/dashboard/manage/campaigns')}
    />,
    <OptionItem
      label="Gerênciar Galeria"
      icon={FiImage}
      onClick={() => handleSubmit('/dashboard/manage/gallery')}
    />,
    <OptionItem
      label="Histórico de Atualizações"
      icon={FiBell}
      onClick={() => handleSubmit('/dashboard/history')}
      disabled
    />,
  ];

  // const curatorAdminItems = [
  //   <OptionItem
  //     label="Editar Perfil"
  //     icon={FiEdit}
  //     onClick={() => handleSubmit('/dashboard/manage/profile')}
  //   />,
  //   <OptionItem
  //     label="Gerênciar Curadores"
  //     icon={FaUsers}
  //     onClick={() => handleSubmit('/dashboard/manage/curators')}
  //   />,
  //   <OptionItem
  //     label="Auditar Instituições"
  //     icon={FaRegBuilding}
  //     onClick={() => handleSubmit('/dashboard/manage/institutions')}
  //   />,
  //   <OptionItem
  //     label="Auditar Campanhas"
  //     icon={HiOutlineClipboardCheck}
  //     onClick={() => handleSubmit('/dashboard/manage/campaigns')}
  //   />,
  // ];

  // const curatorItems = [
  //   <OptionItem
  //     label="Editar Perfil"
  //     icon={FiEdit}
  //     onClick={() => handleSubmit('/dashboard/manage/profile')}
  //   />,
  //   <OptionItem
  //     label="Gerênciar Curadores"
  //     icon={FaUsers}
  //     onClick={() => handleSubmit('/dashboard/manage/curators')}
  //     disabled
  //   />,
  //   <OptionItem
  //     label="Auditar Instituições"
  //     icon={FaRegBuilding}
  //     onClick={() => handleSubmit('/dashboard/manage/institutions')}
  //   />,
  //   <OptionItem
  //     label="Auditar Campanhas"
  //     icon={HiOutlineClipboardCheck}
  //     onClick={() => handleSubmit('/dashboard/manage/campaigns')}
  //   />,
  // ];

  return (
    <>
      <Head>
        <title>Painel do usuário | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <OptionList>
            {institutionItems.map((item, index) => (
              <Fragment key={String(index)}>{item}</Fragment>
            ))}
          </OptionList>
        </Content>

        <Footer />
      </Container>
    </>
  );
}
