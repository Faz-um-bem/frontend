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
      <div>
        <img src={data?.image || '/imgs/noimage.png'} alt="Imagem" />
      </div>

      <aside>
        <h1>{data.title}</h1>

        <p>{data.description}</p>
      </aside>
    </Container>
  );
}
