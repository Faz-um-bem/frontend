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

    width: 3rem;
    height: 3rem;

    background: var(--white);

    border: 0;
    border-top-right-radius: inherit;
    border-bottom-left-radius: inherit;

    svg {
      color: var(--red);
    }
  }
`;

export const NoImage = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  border-radius: 1rem;
  border: 1px dashed var(--blue);

  background: var(--white);

  svg {
    color: var(--blue);
  }
`;
