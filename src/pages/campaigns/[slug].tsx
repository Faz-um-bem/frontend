import Head from 'next/head';
import { BiCheckShield } from 'react-icons/bi';
import { IoMdMail, IoMdPhonePortrait } from 'react-icons/io';
import { FiClock } from 'react-icons/fi';
import { RiPhoneFill } from 'react-icons/ri';
import dynamic from 'next/dynamic';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import Link from 'next/link';
import { Marker } from 'react-leaflet';
import Leaflet from 'leaflet';

import { FaWhatsapp } from 'react-icons/fa';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

import {
  Container,
  HeaderContainer,
  HeaderContent,
  Verify,
  Content,
  ShareContainer,
  MapContainer,
  MapFooter,
  ContactContainer,
  ContactContent,
  WhatsAppButton,
} from '~/styles/campaigns/campaign';

const InstitutionsMap = dynamic(
  () => import('~/components/maps/InstitutionsMap'),
  { ssr: false },
);

const mapIcon = Leaflet.icon({
  iconUrl: `/imgs/marker.svg`,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

export default function Campaign() {
  const url = 'https://github.com';
  const campaign = {
    name: 'Bazar lar das vovozinhas',
  };

  return (
    <>
      <Head>
        <title> Campanha | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <HeaderContainer>
          <div className="background">
            <div>
              <Verify>
                <BiCheckShield size={45} />
                <span>Verificado</span>
              </Verify>
            </div>
          </div>

          <HeaderContent>
            <img src="" alt="img" />
            <div>
              <div>
                <h1>BAZAR LAR DAS VOVOZINHAS</h1>
                <BiCheckShield size={25} />
              </div>
              <h2>ASSOSSIAÇÃO AMPARO PROVIDÊNCIA LAR DAS VOVOZINHAS</h2>
            </div>
          </HeaderContent>
        </HeaderContainer>

        <Content>
          <h1>Sobre a campanha</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
            ut at laoreet amet ut. Gravida odio gravida neque nam pretium
            elementum. Mi, auctor curabitur ac massa, enim euismod sapien
            volutpat purus. Pretium purus faucibus faucibus nunc pulvinar in
            posuere fames. Purus ultricies accumsan vitae, mi senectus. Eu et ac
            nisl nullam sed id neque vehicula et. Gravida mi eros tristique
            viverra vestibulum. Mattis tellus lorem molestie eu. Quis cursus
            molestie a, lectus orci. Eu turpis etiam ultricies nisl, suspendisse
            faucibus tellus. Euismod augue enim auctor arcu. Duis viverra diam
            tortor eu blandit. Sed amet, in ultricies bibendum magna. Maecenas
            et hac est scelerisque at semper lectus.
          </p>

          <h1>
            Compartilhe em suas redes sociais e incentive mais pessoas a fazer
            um bem!
          </h1>
          <ShareContainer>
            <FacebookShareButton url={url} quote={campaign.name}>
              <FacebookIcon size={40} />
            </FacebookShareButton>

            <TwitterShareButton url={url} title={campaign.name}>
              <TwitterIcon size={40} />
            </TwitterShareButton>

            <TelegramShareButton url={url} title={campaign.name}>
              <TelegramIcon size={40} />
            </TelegramShareButton>

            <WhatsappShareButton
              url={url}
              title={campaign.name}
              separator=":: "
            >
              <WhatsappIcon size={40} />
            </WhatsappShareButton>

            <LinkedinShareButton url={url}>
              <LinkedinIcon size={40} />
            </LinkedinShareButton>

            <EmailShareButton url={url} subject={campaign.name} body="body">
              <EmailIcon size={40} />
            </EmailShareButton>
          </ShareContainer>

          <h1>Localização</h1>
          <MapContainer>
            {process.browser && (
              <InstitutionsMap
                interactive={false}
                center={[-29.6987317, -53.8868081]}
              >
                <Marker icon={mapIcon} position={[-29.6987317, -53.8868081]} />
              </InstitutionsMap>
            )}

            <MapFooter>
              <Link
                href={`https://www.google.com/maps/dir/?api=1&destination=${-29.6987317},${-53.8868081}`}
              >
                <a target="_blank" rel="noopener noreferrer">
                  Ver rotas no Google Maps
                </a>
              </Link>
            </MapFooter>
          </MapContainer>
          <p>
            Rua Silva Jardim, 390, Nossa Senhora do Rosário, Santa Maria - RS,
            97000-000
          </p>

          <h1>Contato</h1>
          <ContactContainer>
            <ContactContent>
              <div>
                <IoMdMail size={20} />
                <p>
                  <strong>E-mail:</strong> campaing@example.com
                </p>
              </div>
              <div>
                <RiPhoneFill size={20} />
                <p>
                  <strong>Telefone:</strong> (55) 9988-7766
                </p>
              </div>
              <div>
                <IoMdPhonePortrait size={20} />
                <p>
                  <strong>Celular:</strong> (55) 9 8877-6655
                </p>
              </div>
              <div>
                <FiClock size={20} />
                <p>
                  <strong>Horário:</strong> 8:30 às 18:30
                </p>
              </div>
            </ContactContent>

            <WhatsAppButton>
              <FaWhatsapp size={20} />
              Entrar em contato
            </WhatsAppButton>

            <img src="/imgs/contact-background-img.png" alt="Contact" />
          </ContactContainer>
        </Content>
        <Footer />
      </Container>
    </>
  );
}
