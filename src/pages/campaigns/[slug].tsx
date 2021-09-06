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

import { FaWhatsapp } from 'react-icons/fa';
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
} from '~/styles/campaigns/campaign';
import { api } from '~/services/apiClient';

const ViewMap = dynamic(() => import('~/components/maps/ViewMap'), {
  ssr: false,
});

type CampaignData = {
  title: string;
  description: string;
  address: string;
  address_number: string;
  address_complement: string;
  neighborhood: string;
  postal_code: string;
  state: string;
  city: string;
  address_latitude: string;
  address_longitude: string;
  slug: string;
  logo?: string;
};

type InsitutionData = {
  name: string;
  email: string;
  main_phone: string;
  secondary_phone: string;
  whatsapp_phone: string;
};

type CampaingProps = {
  campaignData: CampaignData;
  institution: InsitutionData;
};

export default function Campaign({ campaignData, institution }: CampaingProps) {
  const url = process.env.NEXT_PUBLIC_WEB_URL;

  return (
    <>
      <Head>
        <title> Campanha | Faz um bem!</title>
        <meta name="description" content={campaignData.description} />+{' '}
        <meta property="og:title" content={campaignData.title} key="ogtitle" />+{' '}
        <meta
          property="og:description"
          content={campaignData.description}
          key="ogdesc"
        />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta
          name="twitter:creator"
          content={campaignData.description}
          key="twhandle"
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_WEB_URL}/campaigns/${campaignData.slug}`}
          key="ogurl"
        />
        <meta property="og:image" content={campaignData.logo} key="ogimage" />
        <meta property="og:site_name" content="Faz um bem!" key="ogsitename" />
        <meta
          property="og:title"
          content="Plataforma de ações solidárias"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={campaignData.description}
          key="ogdesc"
        />
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
            <img src={campaignData?.logo || null} alt={campaignData?.title} />
            <div>
              <div>
                <h1>{campaignData?.title}</h1>
                <BiCheckShield size={25} />
              </div>
              <h2>{institution?.name}</h2>
            </div>
          </HeaderContent>
        </HeaderContainer>

        <Content>
          <h1>Sobre a campanha</h1>
          <p>{campaignData?.description}</p>

          <h1>
            Compartilhe em suas redes sociais e incentive mais pessoas a fazer
            um bem!
          </h1>
          <ShareContainer>
            <FacebookShareButton url={url} quote={campaignData?.title}>
              <FacebookIcon size={40} />
            </FacebookShareButton>

            <TwitterShareButton url={url} title={campaignData?.title}>
              <TwitterIcon size={40} />
            </TwitterShareButton>

            <TelegramShareButton url={url} title={campaignData?.title}>
              <TelegramIcon size={40} />
            </TelegramShareButton>

            <WhatsappShareButton
              url={url}
              title={campaignData?.title}
              separator=":: "
            >
              <WhatsappIcon size={40} />
            </WhatsappShareButton>

            <LinkedinShareButton url={url}>
              <LinkedinIcon size={40} />
            </LinkedinShareButton>

            <EmailShareButton
              url={url}
              subject={campaignData?.title}
              body="body"
            >
              <EmailIcon size={40} />
            </EmailShareButton>
          </ShareContainer>

          <h1>Localização</h1>
          <MapContainer>
            <ViewMap
              interactive={false}
              center={[
                campaignData?.address_latitude,
                campaignData?.address_longitude,
              ]}
              position={[
                campaignData?.address_latitude,
                campaignData?.address_longitude,
              ]}
            />

            <MapFooter>
              <Link
                href={`https://www.google.com/maps/dir/?api=1&destination=${campaignData?.address_latitude},${campaignData?.address_longitude}`}
              >
                <a target="_blank" rel="noopener noreferrer">
                  Ver rotas no Google Maps
                </a>
              </Link>
            </MapFooter>
          </MapContainer>
          <p>
            {campaignData?.address}, {campaignData?.address_number},{' '}
            {campaignData?.address_complement}, {campaignData?.neighborhood},{' '}
            {campaignData?.city} - {campaignData?.state} -{' '}
            {campaignData?.postal_code}
          </p>

          <h1>Contato</h1>
          <ContactContainer>
            <ContactContent>
              <div>
                <IoMdMail size={20} />
                <p>
                  <strong>E-mail:</strong> {institution?.email}
                </p>
              </div>
              <div>
                <RiPhoneFill size={20} />
                <p>
                  <strong>Telefone:</strong> {institution?.main_phone}
                </p>
              </div>
              <div>
                <IoMdPhonePortrait size={20} />
                <p>
                  <strong>Celular:</strong> {institution?.secondary_phone}
                </p>
              </div>
              <div>
                <FiClock size={20} />
                <p>
                  <strong>Horário:</strong> 8:30 às 18:30
                </p>
              </div>
            </ContactContent>

            {institution.whatsapp_phone ? (
              <Link
                href={`https://api.whatsapp.com/send?phone=55${institution.whatsapp_phone}`}
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

            <img src="/imgs/contact-background-img.png" alt="Contact" />
          </ContactContainer>
        </Content>
        <Footer />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const campaign = await api.get(`/campaign/${query.slug}`);
  const institution = await api.get(
    `/institutions/${campaign.data.data.institution_id}`,
  );

  return {
    props: {
      campaignData: campaign.data.data,
      institution: institution?.data.data,
    },
  };
};
