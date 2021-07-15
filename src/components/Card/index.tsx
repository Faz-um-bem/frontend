import { useRouter } from 'next/router';

import { Container } from './styles';

type Location = {
  latitude: number;
  longitude: number;
};

type CardProps = {
  id: string;
  name: string;
  description: string;
  location: Location;
  contact: {
    email: string;
    phone: string;
    phone2: string;
    whatsapp: string;
  };
};

export function Card({ id, name, description, location, contact }: CardProps) {
  const router = useRouter();

  const handleCampaign = () => {
    router.push(`/campaigns/${'33333'}`);
  };

  return (
    <Container onClick={handleCampaign}>
      <div>
        <img src="" alt="" />
      </div>

      <main>
        <h1>{name}</h1>
        <h2>Nome da instituição</h2>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          doloribus totam nam omnis.
        </p>
      </main>
    </Container>
  );
}
