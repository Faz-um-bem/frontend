import { ButtonHTMLAttributes } from 'react';

import { Container } from './styled';

type InstitutionData = {
  logo: string | null;
  name: string;
  description: string;
};

type InstitutionCardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  data: InstitutionData;
};

export function InstitutionItem({ data, ...rest }: InstitutionCardProps) {
  return (
    <Container {...rest}>
      <img src={data?.logo || '/imgs/noimage.png'} alt="Imagem" />
      <header>
        <h1>{data.name}</h1>
      </header>

      <main>
        <p>{data.description}</p>
      </main>
    </Container>
  );
}
