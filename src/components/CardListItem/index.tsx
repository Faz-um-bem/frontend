import { ButtonHTMLAttributes } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Container, Content } from './styled';

type CardListItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  description?: string;
  status?: 'active' | 'draft' | 'inactive' | 'refused' | null;
};

export function CardListItem({
  title,
  description = null,
  status = null,
}: CardListItemProps) {
  return (
    <Container>
      <Content description={description} status={status}>
        <main>
          <h1>{title}</h1>
          <p>{description}</p>
        </main>

        <aside>
          <span>{status}</span>
          <FiChevronRight size={20} />
        </aside>
      </Content>
    </Container>
  );
}
