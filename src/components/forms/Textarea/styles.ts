import styled, { css } from 'styled-components';

import Tooltip from '~/components/Tooltop';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;

  background: var(--white);
  border-radius: 0.8rem;
  border: 0.2rem solid var(--white);

  width: 100%;

  position: relative;

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  ${props =>
    props.isFocused &&
    css`
      color: var(--blue);
      border-color: var(--blue);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--blue);
    `}
`;

export const InputContent = styled.textarea`
  resize: none;
  flex: 1;
  border-radius: inherit;
  padding: 1rem;
  border: 0;
  font-size: 1.2rem;

  ::placeholder {
    color: var(--description);
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  position: absolute;
  top: 1rem;
  right: 1rem;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
