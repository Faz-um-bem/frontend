import React, { ReactNode } from 'react';
import { AppProps } from 'next/app';
import Modal from 'react-modal';

import GlobalStyles from '../styles/global';

import { AuthProvider } from '../contexts/AuthContext';

Modal.setAppElement('#__next');

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>

      <GlobalStyles />
    </>
  );
}

export default MyApp;
