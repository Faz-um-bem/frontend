import styled from "styled-components";
import { Button }  from "../../components/Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 1120px;
  width: 100%;

  margin: 3rem 0;

  border-radius: 1rem;

  h1 {
    color: var(--heading);
    font-size: 2rem;
    margin-top: 3rem;
  }

  p {
    color: var(--text);
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }

  header {
    position: relative;
    height: 40rem;

    display: flex;
    justify-content: center;

    background: var(--gray);

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;

    h1 {
      font-size: 2.5rem;
    }
  }

  main {
    padding: 3rem;
    background: var(--white);
  }
`;

export const Verify = styled.div`
  position: absolute;
  top: 3rem;
  right: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--green);
  height: 8rem;
  width: 8rem;

  border-radius: 1rem;

  color: var(--white);

  span {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const MapContainer = styled.div`
  height: 40rem;
  margin: 1.5rem 0;
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
`;

export const ButtonContent = styled(Button)`
  width: 20rem !important;
  font-size: 1.5rem !important;
  background: var(--green) !important;

  margin: auto;

  :hover {
    border-color: var(--green);
    background: var(--white) !important;
    color: var(--green);
  }
`;
