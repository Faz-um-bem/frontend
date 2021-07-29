import styled from 'styled-components';
import { Button } from '~/components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 1120px;
  width: 100%;

  margin: 2rem 0;

  border-radius: 1rem;

  h1 {
    color: var(--heading);
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  p {
    color: var(--text);
    font-size: 1rem;
    margin-top: 1.5rem;
  }

  header {
    position: relative;
    height: 25rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: var(--white);

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;

    > div:first-child {
      border-bottom: 1px solid var(--gray);
      background: var(--white);
      height: 4rem;
      width: 100%;

      padding: 0 1rem;
      margin-bottom: 1.5rem;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      border-top-left-radius: inherit;
      border-top-right-radius: inherit;

      button {
        display: flex;
        flex-direction: row;
        align-items: center;

        background: var(--background-gray);
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;

        color: var(--white);

        transition: all 0.2s;

        svg {
          margin-right: 0.5rem;
        }

        &:hover {
          background: var(--blue);
        }
      }

      img {
        width: 100%;
        height: 100%;
      }

      h1 {
        font-size: 1.5rem;
        font-weight: bold;
        margin: auto 1rem;
      }

      div {
        display: flex;
        flex-direction: row;
      }
    }
  }

  main {
    padding: 2rem;
    background: var(--white);
  }
`;

export const Verify = styled.div`
  position: absolute;
  top: 5rem;
  right: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--green);
  height: 4rem;
  width: 4rem;

  border-radius: 0.5rem;

  color: var(--white);

  span {
    font-size: 0.8rem;
  }
`;

export const MapContainer = styled.div`
  height: 30rem;
  margin: 1.5rem 0;

  display: flex;
  flex-direction: column;

  border-radius: 0.8rem;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--background-gray);

  @media (max-width: 575.98px) {
    height: 20rem;
  }
`;

export const MapFooter = styled.div`
  width: 100%;

  padding: 1rem 0;
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #f5f8fa;

  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
`;

export const Gallery = styled.div`
  > img {
    margin: 0 auto;
    width: 100%;
    height: 40rem;
    border-radius: 0.8rem;
  }

  div {
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;

    button {
      width: 5rem;
      height: 5rem;

      margin-left: 0.5rem;
      border-radius: 0.4rem;

      opacity: 0.6;

      overflow-wrap: scroll;

      &:first-child {
        margin: 0;
      }

      &.active {
        opacity: 1;
      }

      img {
        border-radius: inherit;
        width: inherit;
        height: inherit;
        object-fit: cover;
      }
    }
  }

  @media (max-width: 991.98px) {
    > img {
      height: 30rem;
    }
  }

  @media (max-width: 767.98px) {
    > img {
      height: 20rem;
    }
  }
`;

export const Contacts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  div {
    margin: 0 auto;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      svg {
        margin-right: 1rem;
        color: var(--blue);
      }

      p {
        margin: auto 0;
        line-height: 3rem;
      }
    }
  }

  @media (max-width: 575.98px) {
    grid-template-columns: 1fr;
    margin-top: 1.5rem;
  }
`;

export const ButtonContent = styled(Button)`
  width: 20rem;
  height: 3rem;
  font-size: 1rem;
  background: var(--green) !important;

  margin: auto;

  :hover {
    border-color: var(--green);
    background: var(--white) !important;
    color: var(--green);
  }

  @media (max-width: 575.98px) {
    margin-top: 1.5rem;
  }
`;
