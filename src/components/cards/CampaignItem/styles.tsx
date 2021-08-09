import styled from 'styled-components';

export const Container = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  flex-direction: column;

  width: 15rem;

  background: var(--white);
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);

  border-radius: 0.8rem;

  header {
    display: flex;
    flex-direction: column;

    background: var(--background-gray);

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    width: 100%;

    div {
      background: var(--yellow);
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;

      height: 4rem;
      padding: 0.5rem;

      h1 {
        text-align: left;
        font-size: 0.8rem;
        font-weight: bold;
        color: var(--heading);
        line-height: 1.5rem;
        text-transform: uppercase;
      }
    }

    img {
      height: 8rem;
      width: 100%;
    }
  }

  main {
    display: flex;
    flex-direction: row;
    width: 100%;

    margin: 0.5rem;

    img {
      height: 5rem;
      width: 5rem;
      margin-right: 0.5rem;

      border-radius: 0.8rem;
      background: var(--background-gray);
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      width: 100%;
      height: 100%;
    }
  }
`;

export const Tag = styled.p`
  background: var(--background-gray);
  border-radius: 0.8rem;

  font-size: 0.8rem;

  padding: 1px 8px;
  margin-top: 0.5rem;

  &:first-child {
    margin-top: 0;
  }
`;
