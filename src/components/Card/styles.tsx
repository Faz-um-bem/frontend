import styled from 'styled-components';
// eslint-disable-next-line
export const Container = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  flex-direction: column;

  background: var(--white);
  border-radius: 1rem;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);

  border: 0;

  min-height: 30rem;
  max-height: 30rem;

  div {
    background: var(--gray);
    height: 14rem;

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;

    img {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
      margin: auto;
    }
  }

  main {
    padding: 1rem;
    text-align: left;

    h1 {
      color: var(--heading);
      font-size: 2rem;
    }

    h2 {
      color: var(--description);
      font-size: 1.5rem;
    }

    p {
      color: var(--text-secondary);
      font-size: 1.5rem;
      margin-top: 1rem;
    }
  }
`;
