import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { Analytics } from '@vercel/analytics/react';
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
        <meta name='author' content='Luis Alexander Arias Aguirre' />
        <meta name='rating' content='safe for kids' />
        <meta name='language' content='english' />
        <meta name='title' content='Superhero App' />
        <meta
          name='description'
          content='The website allows a Superhero Leader (Anonymous User) to create a team of super hero&#39;s based on specific qualities such as strength, speed, super power etc. Once the team has been created, the Superhero Lead can take their team and rule the world!'
        />
        <meta property='og:title' content='Superhero App' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='../public/images/dc-comics.png' />
        <meta property='og:url' content='https://luis-superhero.vercel.app/' />
        <meta
          property='og:description'
          content='The website allows a Superhero Leader (Anonymous User) to create a team of super hero&#39;s based on specific qualities such as strength, speed, super power etc. Once the team has been created, the Superhero Lead can take their team and rule the world!'
        />
        <meta property='og:site_name' content='Superhero App' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='prefetch'
          href='/fonts/typography/HelveticaNeueRegular.woff2'
          as='font'
          crossOrigin
        />
        <link
          rel='prefetch'
          href='/fonts/typography/HelveticaNeueBold.woff2'
          as='font'
          crossOrigin
        />
        <link
          rel='prefetch'
          href='/fonts/typography/ObelixProBold.woff2'
          as='font'
          crossOrigin
        />
        <link
          rel='prefetch'
          href='/fonts/typography/ObelixProRegular.woff2'
          as='font'
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
      <Analytics />
    </>
  );
}

export default MyApp;
