import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import React, { useState } from 'react';
import theme from '../styles/theme';

export const superheroesInfo = React.createContext();

function MyApp({ Component, pageProps }) {
  const [searchParams, setSearchParams] = useState();
  const [myTeam, setMyTeam] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

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
        <superheroesInfo.Provider
          value={{
            searchParams,
            setSearchParams,
            myTeam,
            setMyTeam,
            currentPage,
            setCurrentPage,
          }}
        >
          <Component {...pageProps} />
        </superheroesInfo.Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
