import { Container, Link, Typography } from '@mui/material';
import React from 'react';
import Layout from '../components/layout';
import { BlueTextureBg } from '../components/texture';
Link;

export default function Team() {
  return (
    <Layout>
      <BlueTextureBg />
      <Container maxWidth="lg" sx={{ pt: '50px', pb: '50px' }}>
        <Typography variant="body2" sx={{ mb: 10 }}>
          You do not have any team members selected. Please make selections on
          superheros page.
        </Typography>
      </Container>
    </Layout>
  );
}
