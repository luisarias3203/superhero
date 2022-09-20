import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import React from 'react';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Superhero App</title>
        <meta name="description" content="Superhero App" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="prefetch"
          href="/fonts/typography/HelveticaNeueRegular.woff2"
          as="font"
          crossOrigin
        />
        <link
          rel="prefetch"
          href="/fonts/typography/HelveticaNeueBold.woff2"
          as="font"
          crossOrigin
        />
        <link
          rel="prefetch"
          href="/fonts/typography/ObelixProBold.woff2"
          as="font"
          crossOrigin
        />
        <link
          rel="prefetch"
          href="/fonts/typography/ObelixProRegular.woff2"
          as="font"
          crossOrigin
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
