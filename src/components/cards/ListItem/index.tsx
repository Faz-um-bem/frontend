import { ButtonHTMLAttributes } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Container, Content } from './styled';

type CardData = {
  title: string;
  description?: string;
  status?: 'active' | 'draft' | 'inactive' | 'refused' | null;
};

type CardListItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  data: CardData;
};

export function ListItem({ data, ...rest }: CardListItemProps) {
  return (
    <Container>
      <Content description={data.description} status={data.status} {...rest}>
        <main>
          <h1>{data.title}</h1>
          {data?.description && <p>{data.description}</p>}
        </main>

        <aside>
          {data.status && <span>{data.status}</span>}
          <FiChevronRight size={20} />
        </aside>
      </Content>
    </Container>
  );
}
