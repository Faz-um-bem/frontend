import styled from 'styled-components';
import { Button } from '~/components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    &.background {
      height: 7rem;
      width: 100%;
      background: var(--background-purple);
      display: flex;
      justify-content: center;

      > div {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        max-width: 1120px;
        margin-top: 1rem;
      }
    }
  }

  @media (max-width: 991.98px) {
    > div {
      > div {
        margin: 0 1rem;
      }
    }
  }
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 33px;

  padding: 0 0 1rem;

  > img {
    width: 15rem;
    height: 15rem;
    background: var(--gray);
    border-radius: 0.8rem;
    border: 2px solid var(--purple);
    margin-top: -6rem;
  }

  > div {
    display: grid;
    grid-template-rows: 1.5fr 1fr;
    grid-gap: 0.5rem;
    margin-top: 1rem;

    h1 {
      font-size: 1.5rem;
      font-weight: bold;
      text-transform: uppercase;
      color: var(--heading);
    }

    h2 {
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: uppercase;
      color: var(--description);
    }

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;

      > svg {
        visibility: hidden;
        color: var(--green);
        margin-left: 1rem;
      }
    }
  }

  @media (max-width: 767.98px) {
    padding: 0 1rem;
    grid-template-columns: 1fr;

    > img {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  width: 100%;

  margin: 1rem 0 2rem;

  border-radius: 1rem;

  > h1 {
    color: var(--heading);
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  > p {
    color: var(--text);
    font-size: 1rem;
    margin-top: 1rem;
  }

  @media (max-width: 991.98px) {
    padding: 0 2rem;
  }
`;

export const Verify = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--green);
  height: 5rem;
  width: 5rem;

  border-radius: 1rem;

  color: var(--white);

  span {
    font-size: 0.8rem;
  }
`;

export const ShareContainer = styled.div`
  margin: 0.5rem 0;

  > button {
    margin-left: 0.5rem;

    > svg {
      border-radius: 0.5rem;
    }

    &:first-child {
      margin-left: 0;
    }
  }

  @media (max-width: 575.98px) {
    display: flex;
    justify-content: center;
  }
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 1rem 0;

  > img {
    height: 30rem;
    width: 100%;

    border-radius: 0.8rem;
    background: var(--gray);
    object-fit: contain;
  }

  > div {
    margin-top: 0.5rem;

    > button {
      height: 75px;
      width: 75px;

      background: var(--gray);
      border-radius: 0.8rem;

      margin-left: 0.5rem;

      &:first-child {
        margin-left: 0;
      }

      img {
        width: inherit;
        height: inherit;
        border-radius: inherit;
      }
    }
  }

  @media (max-width: 767.98px) {
    > img {
      height: 20rem;
    }
  }

  @media (max-width: 575.98px) {
    > img {
      height: 18rem;
    }
  }
`;

export const MapContainer = styled.div`
  height: 30rem;
  margin: 1rem 0;

  display: flex;
  flex-direction: column;

  border-radius: 0.8rem;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--background-gray);

  @media (max-width: 767.98px) {
    height: 20rem;
  }

  @media (max-width: 575.98px) {
    height: 15rem;
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

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  margin-top: 1rem;

  > img {
    height: 15rem;
    margin-left: auto;
    margin-top: -5rem;
  }

  @media (max-width: 767.98px) {
    grid-template-columns: 2fr 1fr;

    > img {
      display: none;
    }
  }

  @media (max-width: 575.98px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 2rem;

    color: var(--heading);

    p {
      margin-left: 0.5rem;
      color: var(--text);

      strong {
        color: var(--heading);
      }
    }
  }

  @media (max-width: 991.98px) {
    padding: 0 2rem;
  }

  @media (max-width: 575.98px) {
    margin: 0 auto;
  }
`;

export const WhatsAppButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 3rem;

  background: var(--green);

  align-self: center;
  justify-self: center;

  &:hover {
    color: var(--green);
    border-color: var(--green);
  }

  svg {
    margin-right: 1rem;
  }

  @media (max-width: 575.98px) {
    margin-top: 2rem;
  }
`;
