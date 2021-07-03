import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Header from "../../components/Header";

import {
  Container,
  Content,
  Verify,
  MapContainer,
  Contacts,
  ButtonContent,
} from "./campaign";
import { Footer } from "../../components/Footer";

const Map = dynamic(() => import("../../components/Map"), { ssr: false });

const campaign: React.FC = () => {
  return (
    <>
      <Head>
        <title> Campanha | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <header>
            <h1>Campanha X</h1>

            <Verify>
              icon
              <span>Verificado</span>
            </Verify>
          </header>

          <main>
            <h1>Sobre a campanha</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
              ut at laoreet amet ut. Gravida odio gravida neque nam pretium
              elementum. Mi, auctor curabitur ac massa, enim euismod sapien
              volutpat purus. Pretium purus faucibus faucibus nunc pulvinar in
              posuere fames. Purus ultricies accumsan vitae, mi senectus. Eu et
              ac nisl nullam sed id neque vehicula et. Gravida mi eros tristique
              viverra vestibulum. Mattis tellus lorem molestie eu. Quis cursus
              molestie a, lectus orci. Eu turpis etiam ultricies nisl,
              suspendisse faucibus tellus. Euismod augue enim auctor arcu. Duis
              viverra diam tortor eu blandit. Sed amet, in ultricies bibendum
              magna. Maecenas et hac est scelerisque at semper lectus.
            </p>

            <h1>Localização</h1>
            <MapContainer>
              <Map />
            </MapContainer>
            <p>
              Rua Silva Jardim, 390, Nossa Senhora do Rosário, Santa Maria - RS,
              97000-000
            </p>

            <h1>Contato</h1>
            <Contacts>
              <div>
                <p>E-mail: institution@example.com</p>
                <p>Telefone: (55) 3220-0000</p>
                <p>Celular: (55) 9 9999-9999</p>
              </div>

              <ButtonContent>Entrar em contato</ButtonContent>
            </Contacts>
          </main>
        </Content>

        <Footer />
      </Container>
    </>
  );
};

export default campaign;
