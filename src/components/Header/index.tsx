import Link from 'next/link';

import { useAuth } from '../../hooks/AuthContext';

import {
  Container,
  HeaderContent,
  HeaderItem,
  LoginContent,
  LoggedContent,
} from './styles';

export function Header() {
  const { signOut, isAuthenticated, user } = useAuth();

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
          {isAuthenticated && (
            <HeaderItem>
              <Link href="/dashboard">Painel</Link>
            </HeaderItem>
          )}
        </HeaderContent>

        <LoginContent>
          {!isAuthenticated ? (
            <button type="button">
              <Link href="/sign">Entrar</Link>
            </button>
          ) : (
            <LoggedContent>
              <h1>Olá {user.name}</h1>

              <button type="button" onClick={signOut}>
                Sair
              </button>
            </LoggedContent>
          )}
        </LoginContent>
      </div>
    </Container>
  );
}
