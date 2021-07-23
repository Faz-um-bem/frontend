import React, { ReactNode } from 'react';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Modal from 'react-modal';

import { ChakraProvider } from '@chakra-ui/react';
import GlobalStyles from '~/styles/global';

import { AuthProvider } from '~/contexts/AuthContext';

const ScrollToTop = dynamic(() => import('~/components/ScrollToTop'), {
  ssr: false,
});

Modal.setAppElement('#__next');

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <>
      <ChakraProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>

      <GlobalStyles />
      <ScrollToTop />
    </>
  );
}

export default MyApp;
