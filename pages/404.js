import { Container, Typography } from '@mui/material';
import React from 'react';
import Layout from '../components/layout';
import CustomLink from '../components/link';
import { BlueTextureBg } from '../components/texture';

export default function Custom404() {
  return (
    <Layout>
      <BlueTextureBg />
      <Container maxWidth="lg" sx={{ pt: '100px', pb: '100px' }}>
        <Typography variant="h1" component="h2" sx={{ mb: 10 }}>
          404 Page not Found
        </Typography>
        <Typography variant="body2" component="p" sx={{ mb: 30 }}>
          The requested URL was not found on this server.
        </Typography>
        <CustomLink href="/" variant="contained" color="secondary">
          Return to Homepage
        </CustomLink>
      </Container>
    </Layout>
  );
}
