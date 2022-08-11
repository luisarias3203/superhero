import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import React from 'react';
import theme from '../styles/theme';
import '../styles/typography.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Superhero App</title>
        <meta name="description" content="Superhero App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
