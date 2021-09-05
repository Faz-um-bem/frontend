import { useState } from 'react';
import Head from 'next/head';
import { BiCheckShield } from 'react-icons/bi';
import { IoMdMail, IoMdPhonePortrait } from 'react-icons/io';
import { FiClock } from 'react-icons/fi';
import { RiPhoneFill } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';
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

import { GetServerSideProps } from 'next';
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
import { api } from '~/services/apiClient';

const ViewMap = dynamic(() => import('~/components/maps/ViewMap'), {
  ssr: false,
});

type ImagesData = {
  id: number;
  url: string;
};

type InstitutionProps = {
  name: string;
  description: string;
  images: ImagesData[];
  address: string;
  address_number: string;
  address_complement?: string;
  neighborhood: string;
  postal_code: string;
  city: string;
  state: string;
  address_latitude: number;
  address_longitude: number;
  logo: string;
  email: string;
  main_phone: string;
  secondary_phone?: string;
  whatsapp_phone?: string;
  slug: string;
};

export default function Institution({
  name,
  description,
  logo,
  images,
  address,
  address_number,
  address_complement,
  neighborhood,
  postal_code,
  city,
  state,
  address_latitude,
  address_longitude,
  email,
  main_phone,
  secondary_phone,
  whatsapp_phone,
  slug,
}: InstitutionProps) {
  const url = process.env.NEXT_PUBLIC_WEB_URL;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <>
      <Head>
        <title> Instituição | Faz um bem!</title>
        <meta name="description" content={description} />+{' '}
        <meta property="og:title" content={name} key="ogtitle" />+{' '}
        <meta property="og:description" content={description} key="ogdesc" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={description} key="twhandle" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_WEB_URL}/institutions/${slug}`}
          key="ogurl"
        />
        <meta property="og:image" content={logo} key="ogimage" />
        <meta property="og:site_name" content="Faz um bem!" key="ogsitename" />
        <meta
          property="og:title"
          content="Plataforma de ações solidárias"
          key="ogtitle"
        />
        <meta property="og:description" content={description} key="ogdesc" />
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
            <img src={logo} alt={name} />
            <div>
              <h1>{name}</h1>
              <h2>
                {city} - {state}
              </h2>
            </div>
          </HeaderContent>
        </HeaderContainer>

        <Content>
          <h1>Sobre a instituição</h1>
          <p>{description}</p>

          <h1>
            Compartilhe em suas redes sociais e incentive mais pessoas a fazer
            um bem!
          </h1>
          <ShareContainer>
            <FacebookShareButton url={url} quote={name}>
              <FacebookIcon size={40} />
            </FacebookShareButton>

            <TwitterShareButton url={url} title={name}>
              <TwitterIcon size={40} />
            </TwitterShareButton>

            <TelegramShareButton url={url} title={name}>
              <TelegramIcon size={40} />
            </TelegramShareButton>

            <WhatsappShareButton url={url} title={name} separator=":: ">
              <WhatsappIcon size={40} />
            </WhatsappShareButton>

            <LinkedinShareButton url={url}>
              <LinkedinIcon size={40} />
            </LinkedinShareButton>

            <EmailShareButton url={url} subject={name} body="body">
              <EmailIcon size={40} />
            </EmailShareButton>
          </ShareContainer>

          {!!images && (
            <>
              <h1>Galeria de Fotos</h1>
              <GalleryContainer>
                <img src={images[activeImageIndex]?.url} alt={name} />

                <div>
                  {images.map((image, index) => (
                    <button
                      key={String(image.id)}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img src={image.url} alt={name} />
                    </button>
                  ))}
                </div>
              </GalleryContainer>
            </>
          )}

          <h1>Localização</h1>
          <MapContainer>
            <ViewMap
              position={[address_latitude, address_longitude]}
              interactive={false}
              center={[address_latitude, address_longitude]}
            />

            <MapFooter>
              <Link
                href={`https://www.google.com/maps/dir/?api=1&destination=${address_latitude},${address_longitude}`}
              >
                <a target="_blank" rel="noopener noreferrer">
                  Ver rotas no Google Maps
                </a>
              </Link>
            </MapFooter>
          </MapContainer>
          <p>
            {address}, {address_number}, {address_complement}, {neighborhood},{' '}
            {city} - {state} - {postal_code}
          </p>

          <h1>Contato</h1>
          <ContactContainer>
            <ContactContent>
              <div>
                <IoMdMail size={20} />
                <p>
                  <strong>E-mail:</strong> {email}
                </p>
              </div>
              <div>
                <RiPhoneFill size={20} />
                <p>
                  <strong>Telefone:</strong> {main_phone}
                </p>
              </div>
              <div>
                <IoMdPhonePortrait size={20} />
                <p>
                  <strong>Celular:</strong> {secondary_phone}
                </p>
              </div>
              <div>
                <FiClock size={20} />
                <p>
                  <strong>Horário:</strong> 8:30 às 18:30
                </p>
              </div>
            </ContactContent>

            {whatsapp_phone ? (
              <Link
                href={`https://api.whatsapp.com/send?phone=55${whatsapp_phone}`}
              >
                <a target="_blank" rel="noopener noreferrer">
                  <WhatsAppButton>
                    <FaWhatsapp size={20} />
                    Entrar em contato
                  </WhatsAppButton>
                </a>
              </Link>
            ) : (
              <div />
            )}

            <img src="/imgs/contact-background-img-purple.png" alt="Contact" />
          </ContactContainer>
        </Content>
        <Footer />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await api.get(`/institution/${query.slug}`);
  response.data.data);
  return {
    props: {
      ...response.data.data,
    },
  };
};
