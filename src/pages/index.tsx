import Head from 'next/head';
import React from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import {
  Container,
  Wrapper,
  Content,
  ButtonContainer,
  Section,
  ContentHeading,
  ContentFullText,
  ContentImageLeft,
  ContentImageRight,
  FormContainer,
  InputContent,
  TextareaContent,
  SubmitButton,
} from './styles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Wrapper>
          <Content>
            <div>
              <h1>
                Famílias em situação de vulnerabilidade precisam da sua ajuda!
              </h1>

              <ButtonContainer>Quero ajudar!</ButtonContainer>
            </div>

            <img src="/imgs/together.svg" alt="Juntos" />
          </Content>
        </Wrapper>

        <Section id="about">
          <h1>O que é o Faz um bem?</h1>
          <ContentHeading>
            <p>
              “Faz um bem!” surge em um contexto de emergência de saúde pública
              mundial com a pandemia de Coronavírus Disease 2019 (COVID-19) que
              intensifica a necessidade de ações sociais por parte da sociedade
              civil organizada e do Estado, especialmente através das políticas
              públicas e sociais. Trata-se de um projeto de caráter
              extensionista interdisciplinar, que visa desenvolver
              colaborativamente e impulsionar uma plataforma virtual interativa
              que centralize necessidades de instituições e organizações sociais
              de Santa Maria. Assim, Faz um bem! propõe-se como uma plataforma
              incentivadora e mediadora entre doadores e receptores de recursos.
            </p>

            <img src="/imgs/hugging.svg" alt="Abraçando" />
          </ContentHeading>

          <ContentFullText>
            A plataforma se justifica pela necessidade constante das
            instituições e entidades de assistência social divulgarem suas ações
            e arrecadarem recursos com vistas à continuidade da prestação de
            serviços e de benefícios socioassistenciais, necessários para a
            subsistência de muitas famílias e melhoria das condições de vida na
            perspectiva do acesso e usufruto de seus direitos sociais. Essas
            necessidades são aumentadas no contexto da atual pandemia, que tem
            tido consequência para as esferas social, econômica e política.
          </ContentFullText>

          <ContentFullText>
            A plataforma conta com uma ampla equipe Coordenada por professores
            de diversos Centros da Universidade Federal de Santa Maria. Essa
            parceria permite a inclusão de estudantes de áreas de conhecimentos
            distintas, possibilitando o enriquecimento da formação acadêmica dos
            estudantes na perspectiva da interdisciplinaridade e do trabalho em
            equipe.
          </ContentFullText>

          <ContentImageLeft>
            <span />
            <p>
              A plataforma cadastra campanhas e instituições que possam fazer a
              diferença na vida de famílias e comunidas. Você busca campanhas ou
              instituições e vê como pode ajudar. As ajudas funcionam
              diretamente com os promotores das campanhas, os quais abastecem a
              plataforma com informações. É responsabilidade da plataforma
              conectar doadores e campanhas, tornando mais fácil a visualização
              e o acesso.
            </p>
          </ContentImageLeft>

          <ContentImageLeft>
            <span />
            <p>
              As intituições são responsáveis pelo conteúdo disponibilizado,
              assim como pela execução das doações. A plataforma não é
              responsável pela captação de recursos, nem pela entrega às
              instituições.
            </p>
          </ContentImageLeft>

          <ContentImageLeft>
            <span />
            <p>
              As instituições são responsáveis pelo conteúdo disponibilizado,
              assim como pela execução das doações. A plataforma não é
              responsável pela captação de recursos, nem pela entrega às
              instituições.
            </p>
          </ContentImageLeft>

          <ContentImageLeft>
            <span />
            <p>
              Para ser um apoiador, ajude a divulgar essa plataforma, para que
              chegue a um número enorme de pessoas que possam fazer a diferença.
              Entre em contato pelo email: fazumbem@inf.ufsm.br e saiba mais.
            </p>
          </ContentImageLeft>

          <ContentImageLeft>
            <span />

            <FormContainer id="contact">
              <InputContent placeholder="Nome*" />
              <InputContent placeholder="Telefone*" />
              <InputContent placeholder="E-mail*" />

              <TextareaContent placeholder="Mensagem*" />

              <div>
                <span>(Todos os campos* são obrigatórios)</span>
                <SubmitButton type="submit">Enviar</SubmitButton>
              </div>
            </FormContainer>
          </ContentImageLeft>
        </Section>

        <Footer />
      </Container>
    </>
  );
}
