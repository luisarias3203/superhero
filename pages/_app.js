import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import React, { useState } from 'react';
import theme from '../styles/theme';

export const allSuperheroes = React.createContext();

function MyApp({ Component, pageProps }) {
  const [results, setResults] = useState({});
  const [myTeam, setMyTeam] = useState([]);

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
        <allSuperheroes.Provider
          value={{
            results: [results, setResults],
            myTeam: [myTeam, setMyTeam],
          }}
        >
          <Component {...pageProps} />
        </allSuperheroes.Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
