import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  text-align: left;

  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid var(--background-gray);
  box-shadow: 1px 2px 3px 1px var(--gray);

  width: 100%;
  max-width: 32rem;
  max-height: 13rem;

  background: var(--white);

  div {
    border-radius: 0.62rem;
    width: 150px;
    height: 150px;

    padding: 0.5rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
      object-fit: contain;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    flex: 1;

    h1 {
      font-size: 1rem;
      font-weight: bold;
      color: var(--heading);
      line-height: 1.5rem;
      height: 3rem;
    }

    p {
      color: #263238;
      font-size: 0.9rem;
      line-height: 1.2rem;
    }
  }
`;
