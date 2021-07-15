import React, { InputHTMLAttributes } from 'react';

import { Container, InputContent, Icon } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, ...rest }: InputProps) {
  return (
    <Container>
      <InputContent {...rest} />

      {label && <Icon />}
    </Container>
  );
}
