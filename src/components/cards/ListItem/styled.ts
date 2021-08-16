import styled from 'styled-components';

interface ContentProps {
  description: string | null;
  status: 'active' | 'draft' | 'inactive' | 'refused' | null;
}

const colors = {
  refused: '#D93636',
  active: '#51B853',
  draft: '#FFD666',
  inactive: '#C4C4C4',
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  border: 0;

  background: var(--white);
  border-radius: 1rem;

  height: 6rem;

  & + div {
    margin-top: 1rem;
  }
`;

export const Content = styled.button<ContentProps>`
  display: flex;
  flex-direction: row;
  flex: 1;

  align-items: center;
  padding: 1rem 2rem;

  background: transparent;
  border: 0;
  border-radius: inherit;

  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ${props => props.description === null && `justify-content: center;`}

    width: 100%;

    h1 {
      font-size: 1.2rem;
      color: var(--heading);
    }

    p {
      margin-top: 0.5rem;
      font-size: 1rem;
      color: var(--description);
    }
  }

  aside {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    /* width: 12rem; */

    margin-left: auto;
    padding: 0 1rem;

    span {
      margin: auto;
      text-transform: uppercase;
      font-weight: bold;
      color: ${props => colors[props.status]};
    }
  }
`;
