import { ButtonHTMLAttributes } from 'react';

import { Container } from './styled';

type InstitutionData = {
  image: string | null;
  title: string;
  description: string;
};

type InstitutionCardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  data: InstitutionData;
};

export function InstitutionCard({ data, ...rest }: InstitutionCardProps) {
  return (
    <Container {...rest}>
      <img src={data?.image || '/imgs/noimage.png'} alt="Imagem" />
      <header>
        <h1>{data.title}</h1>
      </header>

      <main>
        <p>{data.description}</p>
      </main>
    </Container>
  );
}
