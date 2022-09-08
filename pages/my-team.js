import { Container, Typography } from '@mui/material';
import React from 'react';
import Layout from '../components/layout';
import CustomLink from '../components/link';
import { TextureBg } from '../components/texture';
import theme from '../styles/theme';

export default function Team() {
  return (
    <Layout>
      <TextureBg />
      <Container maxWidth="lg" sx={{ pt: '50px', pb: '50px' }}>
        <Typography sx={{ display: 'block' }} variant="body2">
          You do not have any team members selected. Please make selections on
        </Typography>
        <CustomLink href="/search" sx={{ padding: 0 }} size="none">
          <Typography
            variant="body2"
            color="main"
            sx={{ color: theme.palette.primary.main, textTransform: 'none' }}
          >
            superheros page
          </Typography>
        </CustomLink>
      </Container>
    </Layout>
  );
}
