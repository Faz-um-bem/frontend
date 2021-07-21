import styled from 'styled-components';

export const Container = styled.footer`
  background: var(--blue);
  width: 100%;
  height: 6rem;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  color: var(--white);

  h1 {
    font-size: 1.5rem;
    font-weight: normal;
  }

  span {
    font-size: 1.5rem;
  }
`;
