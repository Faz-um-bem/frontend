import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaEdit } from 'react-icons/fa';

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
      icon={FaEdit}
      onClick={() => handleSubmit('/dashboard/manage/profile')}
      disabled
    />,
    <OptionItem
      label="Gerênciar Campanhas"
      icon={FaEdit}
      onClick={() => handleSubmit('/dashboard/manage/campaigns')}
    />,
    <OptionItem
      label="Gerênciar Galeria"
      icon={FaEdit}
      onClick={() => handleSubmit('/dashboard/manage/gallery')}
    />,
    <OptionItem
      label="Histórico de Atualizações"
      icon={FaEdit}
      onClick={() => handleSubmit('/dashboard/history')}
      disabled
    />,
  ];

  // const curatorAdminItems = [
  //   <OptionItem
  //     label="Editar Perfil"
  //     icon={FaEdit}
  //     onClick={() => handleSubmit('/dashboard/manage/profile')}
  //     disabled
  //   />,
  //   <OptionItem
  //     label="Gerênciar Curadores"
  //     icon={FaEdit}
  //     onClick={() => handleSubmit('/dashboard/manage/curators')}
  //   />,
  //   <OptionItem
  //     label="Auditar Instituições"
  //     icon={FaEdit}
  //     onClick={() => handleSubmit('/dashboard/manage/institutions')}
  //   />,
  //   <OptionItem
  //     label="Auditar Campanhas"
  //     icon={FaEdit}
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
          <OptionList>{institutionItems.map(item => item)}</OptionList>
        </Content>

        <Footer />
      </Container>
    </>
  );
}
