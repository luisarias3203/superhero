import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import CustomCard from '../components/card';
import Layout from '../components/layout';
import { TextureBg } from '../components/texture';

function Search() {
  return (
    <Layout>
      {/* <CustomLink href="/details/[id]" as={`/details/${1}`}>
        Go to hero
      </CustomLink> */}
      <TextureBg />
      <Container maxWidth="lg" sx={{ pt: '50px', pb: '50px' }}>
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
    </Layout>
  );
}

export default Search;
