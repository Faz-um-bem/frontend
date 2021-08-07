import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  text-align: left;

  border-radius: 1rem;
  box-shadow: 1px 2px 3px 1px var(--gray);

  width: 100%;
  max-width: 548px;
  max-height: 210px;
  /* min-height: 12.5rem; */

  background: var(--white);

  position: relative;

  img {
    width: 160px;
    height: 160px;
    border-radius: inherit;
    object-fit: contain;
    position: absolute;
    border-radius: 0.62rem;

    top: 1rem;
    left: 1rem;

    background: var(--white);
  }

  header {
    display: flex;
    flex-direction: row;

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;

    width: 100%;
    height: 71px;
    padding: 15px 0;
    background: var(--blue);

    h1 {
      font-size: 1rem;
      font-weight: bold;
      color: var(--white);
      line-height: 1.5rem;
      height: 3rem;
      margin-left: 12rem;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 1rem 0;

    p {
      color: #263238;
      font-size: 0.9rem;
      line-height: 1.2rem;
      margin-left: 12rem;
    }
  }

  @media (max-width: 991.98px) {
  }

  @media (max-width: 767.98px) {
  }

  @media (max-width: 575.98px) {
  }
`;
