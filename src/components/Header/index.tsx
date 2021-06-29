import React from "react";
import Link from "next/link";

import { Container, HeaderContent, HeaderItem } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <img src="/imgs/logo.svg" alt="Faz um bem!" />

        <HeaderContent>
          <HeaderItem>
            <Link href="/">Início</Link>
          </HeaderItem>
          <HeaderItem>
            <Link href="/campaigns">Campanhas</Link>
          </HeaderItem>
          <HeaderItem>
            <Link href="/institutions">Instituições</Link>
          </HeaderItem>
          <HeaderItem>
            <Link href="/#contact">Contato</Link>
          </HeaderItem>
        </HeaderContent>
      </div>
    </Container>
  );
};

export default Header;
