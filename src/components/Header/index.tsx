import Link from 'next/link';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';

import { FiMenu } from 'react-icons/fi';
import { useAuth } from '~/hooks/useAuth';

import {
  Container,
  HeaderContent,
  HeaderItem,
  LoginContent,
  LoggedContent,
  DrawerButton,
} from './styles';

export function Header() {
  const { signOut, isAuthenticated, user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isShowDrawerButton] = useMediaQuery('(max-width: 991.98px)');

  return (
    <Container isDrawerOpen={isShowDrawerButton}>
      <div>
        <img src="/imgs/logo.svg" alt="Faz um bem!" />

        {isShowDrawerButton ? (
          <button type="button" onClick={onOpen}>
            <FiMenu size={30} />
          </button>
        ) : (
          <>
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
                  <h1>{user.name}</h1>

                  <button type="button" onClick={signOut}>
                    Sair
                  </button>
                </LoggedContent>
              )}
            </LoginContent>
          </>
        )}
      </div>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            {user?.name || 'Faz um bem!'}
          </DrawerHeader>

          <DrawerBody>
            <HeaderContent isDrawerOpen={isOpen}>
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
          </DrawerBody>

          <DrawerFooter>
            <DrawerButton>
              {!isAuthenticated ? (
                <button type="button">
                  <Link href="/sign">Entrar</Link>
                </button>
              ) : (
                <button type="button" onClick={signOut}>
                  Sair
                </button>
              )}
            </DrawerButton>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
  );
}
