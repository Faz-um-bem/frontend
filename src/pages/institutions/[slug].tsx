import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import Leaflet from 'leaflet';
import { Marker } from 'react-leaflet';
import { BiCheckShield } from 'react-icons/bi';
import { IoMdMail, IoMdPhonePortrait } from 'react-icons/io';
import { FiClock } from 'react-icons/fi';
import { RiPhoneFill } from 'react-icons/ri';
import { FaChevronLeft } from 'react-icons/fa';
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

import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

import {
  Container,
  Content,
  Verify,
  MapContainer,
  MapFooter,
  Gallery,
  Contacts,
  ButtonContent,
} from '~/styles/institutions/institution';

const mapIcon = Leaflet.icon({
  iconUrl: `/imgs/marker.svg`,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const Map = dynamic(() => import('~/components/Map'), { ssr: false });

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
  const { back } = useRouter();

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

  const url = 'https://github.com';

  // const loadInstitution = useCallback(() => {
  //   const response = {
  //     name: 'Instituição Teste',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis ut at laoreet amet ut. Gravida odio gravida neque nam pretium elementum. Mi, auctor curabitur ac massa, enim euismod sapien volutpat purus. Pretium purus faucibus faucibus nunc pulvinar in posuere fames. Purus ultricies accumsan vitae, mi senectus. Eu et ac nisl nullam sed id neque vehicula et. Gravida mi eros tristique viverra vestibulum. Mattis tellus lorem molestie eu. Quis cursus molestie a, lectus orci. Eu turpis etiam ultricies nisl, suspendisse faucibus tellus. Euismod augue enim auctor arcu. Duis viverra diam tortor eu blandit. Sed amet, in ultricies bibendum magna. Maecenas et hac est scelerisque at semper lectus.',
  //    images: [
  //   { id: 1, url: 'https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg' },
  //   { id: 2, url: 'https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp' },
  //   { id: 3, url: 'https://www.grupoescolar.com/wp-content/uploads/2021/03/paisagem-2C-1024x583.jpg' },
  //   { id: 4, url: 'https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg' },
  //   { id: 5, url: 'https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg' },
  //   { id: 6, url: 'https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg' },
  //   { id: 7, url: 'https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg' },
  //   { id: 8, url: 'https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg' },
  //   { id: 9, url: 'https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg' },
  // ],
  //     address: {
  //       name: 'Nome da rua',
  //       number: '103',
  //       complement: 'Quadra 91',
  //       neighborhood: 'Nome do bairro',
  //       postal_code: '99000333',
  //       city: 'Nome da cidade',
  //       uf: 'UF',
  //       latitude: -29.698378,
  //       longitude: -53.860909,
  //     },
  //     contact: {
  //       email: 'johndoe@example.com',
  //       main_phone: '988776655',
  //       secondary_phone: '988776655',
  //       whatsapp_phone: '988776655',
  //       from: '8:00',
  //       to: '16:00',
  //     },
  //   };

  //   setInstitution(response);
  // }, []);

  // useEffect(() => {
  //   loadInstitution();
  // }, []);

  return (
    <>
      <Head>
        <title> Instituição | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <header>
            <div>
              <button type="button" onClick={back}>
                <FaChevronLeft />
                Voltar
              </button>

              <div>
                <FacebookShareButton url={url} quote={institution.name}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>

                <TwitterShareButton url={url} title={institution.name}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>

                <TelegramShareButton url={url} title={institution.name}>
                  <TelegramIcon size={32} round />
                </TelegramShareButton>

                <WhatsappShareButton
                  url={url}
                  title={institution.name}
                  separator=":: "
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>

                <LinkedinShareButton url={url}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>

                <EmailShareButton
                  url={url}
                  subject={institution.name}
                  body="body"
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
              </div>
            </div>

            <img src="/imgs/noimageinstitution.png" alt="Sem Imagem" />

            <Verify>
              <BiCheckShield size={30} />
              <span>Verificado</span>
            </Verify>
          </header>

          <main>
            <h1>{institution.name}</h1>

            <h2>Sobre a Instituição</h2>

            <p>{institution.description}</p>

            <h2>Localização</h2>
            <MapContainer>
              {process.browser && (
                <Map
                  interactive={false}
                  center={[
                    institution.address.latitude,
                    institution.address.longitude,
                  ]}
                >
                  <Marker
                    icon={mapIcon}
                    position={[
                      institution.address.latitude,
                      institution.address.longitude,
                    ]}
                  />
                </Map>
              )}
              <MapFooter>
                <Link
                  href={`https://www.google.com/maps/dir/?api=1&destination=${institution.address.latitude},${institution.address.longitude}`}
                >
                  <a target="_blank" rel="noopener noreferrer">
                    Ver rotas no Google Maps
                  </a>
                </Link>
              </MapFooter>
            </MapContainer>
            <p>
              {institution.address.name}, {institution.address.number},{' '}
              {institution.address.complement},{' '}
              {institution.address.neighborhood}, {institution.address.city} -{' '}
              {institution.address.uf},{institution.address.postal_code}
            </p>

            <h2>Galeria</h2>

            <Gallery>
              <img
                src={institution?.images[activeImageIndex].url}
                alt="tafdas"
              />

              <div>
                {institution.images.map((image, index) => (
                  <button
                    key={image.id}
                    className={activeImageIndex === index ? 'active' : ''}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img src={image.url} alt={institution.name} />
                  </button>
                ))}
              </div>
            </Gallery>

            <h2>Contato</h2>
            <Contacts>
              <div>
                <div>
                  <IoMdMail size={18} />
                  <p>E-mail: {institution.contact.email}</p>
                </div>

                <div>
                  <RiPhoneFill size={18} />
                  <p>Telefone: (55) {institution.contact.main_phone}</p>
                </div>

                <div>
                  <IoMdPhonePortrait size={18} />
                  <p>Celular: (55) {institution.contact.secondary_phone}</p>
                </div>

                <div>
                  <FiClock size={18} />
                  <p>
                    Das {institution.contact.from} às {institution.contact.to}
                  </p>
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
