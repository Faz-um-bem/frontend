import { ButtonHTMLAttributes } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { campaignStatus } from '~/utils/enum/campaign';

import { Container, Content } from './styled';

type CardData = {
  title: string;
  description?: string;
  status?: number;
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
          {data.status && (
            <span>
              {data.status === campaignStatus.approved && 'Aprovada'}
              {data.status === campaignStatus.refused && 'Recusada'}
              {data.status === campaignStatus.inactive && 'Inativa'}
              {data.status === campaignStatus.underReview && 'Em análise'}
            </span>
          )}
          <FiChevronRight size={20} />
        </aside>
      </Content>
    </Container>
  );
}
