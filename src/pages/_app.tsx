import React, { ReactNode } from 'react';
import { AppProps } from 'next/app';

import GlobalStyles from '../styles/global';

import { AuthProvider } from '../hooks/AuthContext';

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
