import { useRouter } from 'next/router';

import { Container, Tag } from './styles';

type CampaignData = {
  id: number;
  slug: string;
  title: string;
  tags?: string[];
  logo?: string;
};

type CardProps = {
  campaign: CampaignData;
};

export function CampaignItem({ campaign }: CardProps) {
  const router = useRouter();

  const handleCampaign = () => {
    router.push(`/campaigns/${campaign.slug}`);
  };

  return (
    <Container onClick={handleCampaign}>
      <header>
        <img src={campaign.logo} alt={campaign.title} />
        <div>
          <h1>{campaign.title}</h1>
        </div>
      </header>

      <main>
        <img src="" alt="" />

        <div>
          {campaign.tags?.map((tag, index) => (
            <Tag key={String(index)}>{tag}</Tag>
          ))}
        </div>
      </main>
    </Container>
  );
}
