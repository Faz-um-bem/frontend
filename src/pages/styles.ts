import styled from "styled-components";
import { Button }  from "../components/Button";

import { Input } from "../components/Input";
import { Textarea } from "../components/Textarea";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  background: linear-gradient(120deg, #034074, rgba(3, 64, 115, 0.6));

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.main`
  max-width: 1120px;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;

  margin: auto;

  div {
    margin: auto 0;

    h1 {
      color: var(--white);
      font-size: 4rem;
      line-height: 4rem;
      width: 440px;
      font-weight: normal;
    }
  }
`;

export const ButtonContainer = styled(Button)`
  background: var(--yellow);
  margin-top: 8rem;
  height: 6rem;
  width: 40rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 1120px;
  width: 100%;

  margin: 3rem 0;

  h1 {
    font-size: 3rem;
    color: var(--heading);
  }
`;

export const ContentHeading = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 1rem;

  p {
    font-size: 1.5rem;
    text-align: justify;
  }

  img {
    margin: 0 auto;
    width: 28rem;
  }
`;

export const ContentFullText = styled.p`
  font-size: 1.5rem;
  margin-top: 3rem;
  text-align: justify;
`;

export const ContentImageLeft = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  margin-top: 3rem;

  p {
    font-size: 1.5rem;
    text-align: justify;
  }
`;

export const ContentImageRight = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  margin-top: 3rem;

  p {
    font-size: 1.5rem;
    text-align: justify;
  }
`;

export const FormContainer = styled.form`
  max-width: 350px;
  margin: 3rem auto 0;

  div {
    display: grid;
    grid-template-columns: 1.5fr 1fr;

    span {
      font-size: 1rem;
      color: var(--description);
    }
  }
`;

export const InputContent = styled(Input)``;

export const TextareaContent = styled(Textarea)`
  margin: 1rem 0;
`;

export const SubmitButton = styled(Button)`
  height: 4rem;
  font-size: 1.5rem;
`;
