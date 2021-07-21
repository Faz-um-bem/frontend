import styled from 'styled-components';
import { Button } from '~/components/Button';

import { Input } from '~/components/Input';
import { Textarea } from '~/components/Textarea';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  height: 50rem;
  width: 100%;
  background: var(--purple);

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

export const BackgroundContent = styled.div`
  height: 50rem;
  width: 70%;
  background: var(--yellow);
  position: absolute;
  left: 0;
`;

export const Content = styled.main`
  max-width: 1120px;
  width: 100%;
  height: 100%;

  position: relative;
  z-index: 2;

  display: grid;
  grid-template-columns: 2fr 2fr;

  margin: auto;

  img {
    height: 50rem;
  }

  div {
    margin: auto 0;

    span {
      width: 424px;
      color: var(--blue);
      font-size: 30px;
      line-height: 3rem;
      font-weight: normal;
      text-align: justify;
    }
  }
`;

export const ButtonContainer = styled(Button)`
  background: var(--orange);
  margin-top: 6rem;
  border-radius: 1.5rem;
  font-size: 2rem;

  :hover {
    border-color: var(--orange);
    color: var(--orange);
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 1120px;
  width: 100%;

  margin-top: 5rem;
  padding: 10rem 0 5rem;

  position: relative;

  img {
    position: absolute;
    width: 40rem;
    top: 0;
    left: 2rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 3rem;
    margin-top: 2rem;
    text-align: justify;
  }

  > div {
    display: grid;
    grid-template-columns: 2fr 7.5fr;

    div {
      display: flex;
      flex-direction: column;

      span {
        color: var(--blue);
        font-size: 3rem;
        text-align: right;
        margin-bottom: 2.5rem;
        text-transform: uppercase;
      }
    }
  }

  h1 {
    font-size: 3rem;
    color: var(--heading);
  }
`;

export const MoreInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  background: var(--yellow);

  padding: 7.5rem 0;
`;

export const MoreInfoContent = styled.div`
  width: 100%;
  max-width: 1120px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 5rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem 3rem;

    background: var(--white);
    box-shadow: 0 2px 4px 1px var(--gray);

    font-size: 1.5rem;
    color: var(--heading);

    h1 {
      font-size: 2rem;
      text-transform: uppercase;
    }

    img {
      margin-top: 2rem;
    }

    p {
      margin-top: 2rem;
      line-height: 3rem;
      text-align: center;
    }
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  width: 100%;

  position: relative;

  > div {
    display: grid;
    grid-template-columns: 1fr 3fr;
    position: relative;
    width: 100%;

    &.background_gray {
      display: flex;
      background: var(--backgorund-gray);
      width: 50%;
      height: 100%;
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
    }

    &.background_purple {
      display: flex;
      background: var(--background-purple);
      width: 50%;
      min-height: 100%;
      position: absolute;
      z-index: 0;
      top: 0;
      right: 0;
    }

    &.content {
      max-width: 1120px;
    }

    img {
      width: 500px;
      margin: 5rem 0;
      margin-right: -100px;
      position: relative;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;

      background: var(--purple);
    }
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  padding-left: 225px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  > div:last-child {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 1rem;

    margin-top: 1.5rem;

    span {
      color: var(--text-white);
      font-size: 1.3rem;
    }
  }
`;

export const InputContent = styled(Input)``;

export const TextareaContent = styled(Textarea)``;

export const SubmitButton = styled(Button)`
  background: var(--orange);
  color: var(--white);
  font-weight: bold;
  font-size: 1.5rem;
`;
