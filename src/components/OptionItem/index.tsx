import React, { ButtonHTMLAttributes, ElementType } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, Label } from './styles';

type OptionItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  icon: ElementType<IconBaseProps>;
};

export function OptionItem({ label, icon: Icon, ...rest }: OptionItemProps) {
  return (
    <Container {...rest}>
      <Icon size={50} />
      <Label>{label}</Label>
    </Container>
  );
}
