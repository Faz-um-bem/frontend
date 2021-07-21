import styled from 'styled-components';

export const Container = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  flex-direction: column;

  background: var(--white);
  border-radius: 1rem;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);

  border: 0;

  height: 100%;
  max-height: 30rem;
  max-width: 50rem;
  width: 100%;

  div {
    background: var(--gray);
    height: 14rem;
    width: 100%;

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;

    img {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
      margin: auto;
      width: inherit;
      height: inherit;
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
