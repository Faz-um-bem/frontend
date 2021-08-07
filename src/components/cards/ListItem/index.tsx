import { ButtonHTMLAttributes } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Container, Content } from './styled';

type CardData = {
  title: string;
  description?: string;
  status?: 'active' | 'draft' | 'inactive' | 'refused' | null;
};

type CardListItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  campaign: CardData;
};

export function ListItem({ campaign, ...rest }: CardListItemProps) {
  return (
    <Container>
      <Content
        description={campaign.description}
        status={campaign.status}
        {...rest}
      >
        <main>
          <h1>{campaign.title}</h1>
          {campaign.description && <p>{campaign.description}</p>}
        </main>

        <aside>
          {campaign.status && <span>{campaign.status}</span>}
          <FiChevronRight size={20} />
        </aside>
      </Content>
    </Container>
  );
}
