import React, { ButtonHTMLAttributes, ReactNode } from "react";

import { Container } from "./styled";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
}
