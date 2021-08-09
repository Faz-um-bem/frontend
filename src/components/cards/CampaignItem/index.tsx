import { useRouter } from 'next/router';

import { Container } from './styles';

type CampaignData = {
  id: string;
  image: string;
  title: string;
  tags: string[];
  institution: {
    name: string;
  };
};

type CardProps = {
  campaign: CampaignData;
};

export function CampaignItem({ campaign }: CardProps) {
  const router = useRouter();

  const handleCampaign = () => {
    router.push(`/campaigns/${campaign.id}`);
  };

  return (
    <Container onClick={handleCampaign}>
      <header>
        <h1>CAMPANHA PARA ARRECADAÇÃO DE ALIMENTOS</h1>
        <img src={campaign.image} alt={campaign.title} />
      </header>

      <main>
        <h1>{campaign.title}</h1>
        <h2>{campaign.institution.name}</h2>

        <div>
          {campaign.tags.map((tag, index) => (
            <p key={String(index)}>{tag}</p>
          ))}
        </div>
      </main>
    </Container>
  );
}
