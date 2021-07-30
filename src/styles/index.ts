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
  height: 30rem;
  width: 100%;

  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  > div {
    width: 100%;
    height: inherit;

    &.background_left {
      background: var(--yellow);
      width: 140%;
    }

    &.background_right {
      background: #774057;
      width: 60%;
      justify-self: flex-end;
    }
  }

  @media (max-width: 767.98px) {
    grid-template-columns: 1fr;

    > div {
      &.background_left {
        display: none;
      }

      &.background_right {
        display: none;
      }
    }
  }

  @media (max-width: 991.98px) {
    grid-template-columns: 1fr;

    > div {
      &.background_left {
        display: none;
      }

      &.background_right {
        display: none;
      }
    }
  }
`;

export const Content = styled.main`
  position: absolute;
  width: 100%;
  height: inherit;
  max-width: 1120px;
  padding: 0 1rem;

  display: flex;
  flex-direction: row;
  justify-self: center;

  img {
    margin-top: -0.5px;
  }

  div {
    margin: auto 0;

    span {
      width: 430px;
      color: var(--blue);
      font-size: 26px;
      line-height: 2rem;
      font-weight: normal;
      text-align: justify;
    }
  }

  @media (max-width: 767.98px) {
    background: var(--yellow);
    padding: 2.5rem;
    text-align: center;

    div {
      display: grid;
      grid-template-columns: 1fr;
      margin: 0 auto;

      span {
        text-align: center;
      }
    }

    img {
      display: none;
    }
  }

  @media (max-width: 991.98px) {
    background: var(--yellow);
    padding: 2.5rem;
    text-align: center;

    div {
      display: grid;
      grid-template-columns: 1fr;
      margin: 0 auto;

      span {
        text-align: center;
      }
    }

    img {
      display: none;
    }
  }
`;

export const ButtonContainer = styled(Button)`
  background: var(--orange);
  margin-top: 3rem;
  border-radius: 0.8rem;

  :hover {
    border-color: var(--orange);
    color: var(--orange);
  }

  @media (max-width: 767.98px) {
    width: 28rem;
    margin: 0 auto;
  }

  @media (max-width: 991.98px) {
    width: 25rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 1120px;
  width: 100%;

  padding: 10rem 1rem 5rem;

  position: relative;

  img {
    position: absolute;
    width: 30rem;
    top: 4rem;
    left: 3rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 2rem;
    margin-top: 2rem;
    text-align: justify;
  }

  > div {
    display: grid;
    grid-template-columns: 3fr 7fr;

    div {
      display: flex;
      flex-direction: column;

      span {
        color: var(--blue);
        font-size: 2.5rem;
        text-align: right;
        margin-bottom: 1rem;
        text-transform: uppercase;
      }
    }
  }

  @media (max-width: 767.98px) {
    padding: 2.5rem;

    > div {
      grid-template-columns: 1fr;

      img {
        display: none;
      }

      div {
        span {
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 991.98px) {
    padding: 2.5rem;

    > div {
      grid-template-columns: 1fr;

      img {
        display: none;
      }
    }
  }
`;

export const MoreInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  background: var(--purple);

  padding: 5rem 0;
`;

export const MoreInfoContent = styled.div`
  width: 100%;
  max-width: 1120px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem;

    background: var(--white);
    box-shadow: 0 3px 5px 1px rgba(0, 0, 0, 0.25);
    border-radius: 0.8rem;

    font-size: 1rem;
    color: var(--heading);

    h1 {
      font-size: 1.5rem;
      text-transform: uppercase;
    }

    img {
      margin-top: 1.5rem;
    }

    p {
      margin-top: 1.5rem;
      line-height: 2rem;
      text-align: center;
    }
  }

  @media (max-width: 991.98px) {
    grid-template-columns: 1fr;

    div {
      margin: 0 5rem;
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

    &.background_yellow {
      display: flex;
      background: var(--background-yellow);
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
      max-width: 1120px;
      margin: 3rem 0;
      margin-right: -100px;
      position: relative;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;

      background: var(--yellow);

      h1 {
        color: var(--heading);
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
  }

  @media (max-width: 767.98px) {
    > div {
      grid-template-columns: 1fr;

      &.background_gray {
        display: none;
      }

      &.background_purple {
        display: none;
      }

      img {
        display: none;
      }
    }
  }

  @media (max-width: 991.98px) {
    > div {
      grid-template-columns: 1fr;

      &.background_gray {
        display: none;
      }

      &.background_purple {
        display: none;
      }
    }

    img {
      display: none;
    }
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  padding: 2.5rem 0;
  padding-left: 175px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  h1 {
    color: var(--white);
    font-size: 1.5rem;
    text-transform: uppercase;
    text-align: center;
  }

  > div:last-child {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 1rem;

    margin-top: 0.5rem;

    span {
      color: var(--blue);
      font-size: 1rem;
    }
  }

  @media (max-width: 991.98px) {
    padding: 2.5rem;
  }
`;

export const InputContent = styled(Input)``;

export const TextareaContent = styled(Textarea)``;

export const SubmitButton = styled(Button)`
  background: var(--blue);
  color: var(--white);
  font-weight: bold;
  height: 4rem;
`;
