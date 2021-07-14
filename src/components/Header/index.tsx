import React from "react";
import Link from "next/link";

import { Container, HeaderContent, HeaderItem, LoginContent, LoggedContent } from "./styles";

export default function Header() {
  const logged = false;

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
            <Link href="/#about">Sobre nós</Link>
          </HeaderItem>
          <HeaderItem>
            <Link href="/#contact">Contato</Link>
          </HeaderItem>
        </HeaderContent>

        <LoginContent>
          {!logged ? (
            <button type="button">
              <Link href="/sign">Acessar a plataforma</Link>
            </button>
          ) : (
            <LoggedContent>
              <h1>Olá Wederson Fagundes</h1>

              <button type="button">Sair</button>
            </LoggedContent>
          )}
        </LoginContent>
      </div>
    </Container>
  );
};
