import { Box, styled } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import CustomCard from '../components/card';
import Layout from '../components/layout';
import BlueTexture from '../public/images/blue-texture-dots.svg';

export default function Search() {
  const BlueTextureBg = styled(Box)(({ theme }) => ({
    position: 'relative',
    paddingBottom: 50,
    paddingTop: 50,
    '&:before': {
      background: `#f8f8f8 url(${BlueTexture.src}) 30vw -10vw / cover no-repeat`,
      backgroundAttachment: 'fixed',
      position: 'absolute',
      right: 0,
      bottom: 0,
      left: 0,
      top: 0,
      zIndex: -1,
      width: '100%',
      height: '100%',
      content: "''",
    },
  }));

  return (
    <Layout>
      {/* <CustomLink href="/details/[id]" as={`/details/${1}`}>
        <a>Go to hero </a>
      </CustomLink> */}
      <BlueTextureBg>
        <Container maxWidth="lg">
          <Grid container columnSpacing={18} rowSpacing={13}>
            <Grid item xs={12} sm={6} lg={3}>
              <CustomCard />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <CustomCard />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <CustomCard />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <CustomCard />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <CustomCard />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <CustomCard />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <CustomCard />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <CustomCard />
            </Grid>
          </Grid>
        </Container>
      </BlueTextureBg>
    </Layout>
  );
}
