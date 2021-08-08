import { useState } from 'react';
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
  GalleryContainer,
} from '~/styles/institutions/institution';

const Map = dynamic(() => import('~/components/Map'), { ssr: false });

const mapIcon = Leaflet.icon({
  iconUrl: `/imgs/marker.svg`,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

type ImagesData = {
  id: number;
  url: string;
};

type InstitutionData = {
  name: string;
  description: string;
  images: ImagesData[];
  address: {
    name: string;
    number: string;
    complement?: string;
    neighborhood: string;
    postal_code: string;
    city: string;
    uf: string;
    latitude: number;
    longitude: number;
  };
  contact: {
    email: string;
    main_phone: string;
    secondary_phone?: string;
    whatsapp_phone?: string;
    from: string;
    to: string;
  };
};

export default function Institution() {
  const url = 'https://github.com';
  const campaign = {
    name: 'Bazar lar das vovozinhas',
  };

  const [institution, setInstitution] = useState<InstitutionData>({
    name: 'Instituição Teste',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis ut at laoreet amet ut. Gravida odio gravida neque nam pretium elementum. Mi, auctor curabitur ac massa, enim euismod sapien volutpat purus. Pretium purus faucibus faucibus nunc pulvinar in posuere fames. Purus ultricies accumsan vitae, mi senectus. Eu et ac nisl nullam sed id neque vehicula et. Gravida mi eros tristique viverra vestibulum. Mattis tellus lorem molestie eu. Quis cursus molestie a, lectus orci. Eu turpis etiam ultricies nisl, suspendisse faucibus tellus. Euismod augue enim auctor arcu. Duis viverra diam tortor eu blandit. Sed amet, in ultricies bibendum magna. Maecenas et hac est scelerisque at semper lectus.',
    images: [
      {
        id: 1,
        url: 'https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg',
      },
      {
        id: 2,
        url: 'https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp',
      },
      {
        id: 3,
        url: 'https://www.grupoescolar.com/wp-content/uploads/2021/03/paisagem-2C-1024x583.jpg',
      },
      {
        id: 4,
        url: 'https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg',
      },
      {
        id: 5,
        url: 'https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg',
      },
      {
        id: 6,
        url: 'https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg',
      },
      {
        id: 7,
        url: 'https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg',
      },
      {
        id: 8,
        url: 'https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg',
      },
      {
        id: 9,
        url: 'https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg',
      },
      {
        id: 10,
        url: 'https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg',
      },
      {
        id: 11,
        url: 'https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp',
      },
      {
        id: 12,
        url: 'https://www.grupoescolar.com/wp-content/uploads/2021/03/paisagem-2C-1024x583.jpg',
      },
      {
        id: 13,
        url: 'https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg',
      },
      {
        id: 14,
        url: 'https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp',
      },
      {
        id: 15,
        url: 'https://www.grupoescolar.com/wp-content/uploads/2021/03/paisagem-2C-1024x583.jpg',
      },
    ],
    address: {
      name: 'Nome da rua',
      number: '103',
      complement: 'Quadra 91',
      neighborhood: 'Nome do bairro',
      postal_code: '99000333',
      city: 'Nome da cidade',
      uf: 'UF',
      latitude: -29.698378,
      longitude: -53.860909,
    },
    contact: {
      email: 'johndoe@example.com',
      main_phone: '988776655',
      secondary_phone: '988776655',
      whatsapp_phone: '988776655',
      from: '8:00',
      to: '16:00',
    },
  });
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <>
      <Head>
        <title> Instituição | Faz um bem!</title>
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
              <h1>ASSOSSIAÇÃO AMPARO PROVIDÊNCIA LAR DAS VOVOZINHAS</h1>
              <h2>santa maria - rs</h2>
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

          <h1>Galeria de Fotos</h1>
          <GalleryContainer>
            <img
              src={institution?.images[activeImageIndex].url}
              alt={institution.name}
            />

            <div>
              {institution?.images.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img src={image.url} alt={institution.name} />
                </button>
              ))}
            </div>
          </GalleryContainer>

          <h1>Localização</h1>
          <MapContainer>
            {process.browser && (
              <Map interactive={false} center={[-29.6987317, -53.8868081]}>
                <Marker icon={mapIcon} position={[-29.6987317, -53.8868081]} />
              </Map>
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

            <img src="/imgs/contact-background-img-purple.png" alt="Contact" />
          </ContactContainer>
        </Content>
        <Footer />
      </Container>
    </>
  );
}
