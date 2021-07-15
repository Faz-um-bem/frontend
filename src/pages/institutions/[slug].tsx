import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { BiCheckShield } from 'react-icons/bi';
import { IoMdMail, IoMdPhonePortrait } from 'react-icons/io';
import { FiClock } from 'react-icons/fi';
import { RiPhoneFill } from 'react-icons/ri';

import Header from '../../components/Header';
import { Footer } from '../../components/Footer';

import {
  Container,
  Content,
  Verify,
  MapContainer,
  Contacts,
  ButtonContent,
} from './campaign';

const Map = dynamic(() => import('../../components/Map'), { ssr: false });

export default function Campaign() {
  const init = {
    latitude: -29.705408,
    longitude: -53.8146707,
  };

  const place = [
    {
      id: `1`,
      name: 'testando 123',
      slug: 'teste-123',
      location: {
        latitude: -29.705408,
        longitude: -53.8146707,
      },
    },
  ];

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
              <BiCheckShield size={50} />
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
              <Map initialLocation={init} places={place} />
            </MapContainer>
            <p>
              Rua Silva Jardim, 390, Nossa Senhora do Rosário, Santa Maria - RS,
              97000-000
            </p>

            <h1>Galeria</h1>

            <div style={{ height: 500 }} />

            <h1>Contato</h1>
            <Contacts>
              <div>
                <div>
                  <IoMdMail size={18} />
                  <p>E-mail: institution@example.com</p>
                </div>

                <div>
                  <RiPhoneFill size={18} />
                  <p>Telefone: (55) 3218-0000</p>
                </div>

                <div>
                  <IoMdPhonePortrait size={18} />
                  <p>Celular: (55) 9 9999-9999</p>
                </div>

                <div>
                  <FiClock size={18} />
                  <p>Das 8h às 18h</p>
                </div>
              </div>

              <ButtonContent>Entrar em contato</ButtonContent>
            </Contacts>
          </main>
        </Content>

        <Footer />
      </Container>
    </>
  );
}
