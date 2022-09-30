import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import React, { useState } from 'react';
import theme from '../styles/theme';

export const superheroesInfo = React.createContext();

export const initialState = {
  keyword: '',
  gender: '',
  alignment: '',
  powerStats: [],
};

function MyApp({ Component, pageProps }) {
  const [searchParams, setSearchParams] = useState(initialState);
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
        <superheroesInfo.Provider
          value={{
            searchParams,
            setSearchParams,
            myTeam,
            setMyTeam,
          }}
        >
          <Component {...pageProps} />
        </superheroesInfo.Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
