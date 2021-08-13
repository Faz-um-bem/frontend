import styled from 'styled-components';

export const Container = styled.div`
  background: var(--gray);

  width: 10rem;
  height: 10rem;

  position: relative;

  border-radius: 1rem;
`;

export const ImageContent = styled.div`
  border-radius: inherit;

  img {
    width: 10rem;
    height: 10rem;

    border-radius: inherit;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.5rem;
    height: 2.5rem;

    background: var(--white);

    border: 0;
    border-top-right-radius: inherit;
    border-bottom-left-radius: inherit;

    svg {
      color: var(--red);
    }
  }
`;

export const NoImage = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 1rem;
  border: 1px dashed var(--blue);
  background: var(--white);

  label {
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: inherit;
    height: inherit;

    svg {
      color: var(--blue);
    }
  }

  input {
    display: none;
  }
`;
