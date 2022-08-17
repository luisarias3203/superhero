import { Slide } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React from 'react';
import Link from '../components/link';
import theme from '../styles/theme';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        pb: 7,
        pt: 2,
        position: 'relative',
        [theme.breakpoints.up('lg')]: { pt: 17, pb: 0 },
      }}
    >
      <Box
        sx={{
          bottom: 0,
          height: '100%',
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: -1,
        }}
      >
        <Image
          src="/images/blue-background.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          sx={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
      </Box>
      <Container maxWidth="lg" align="center">
        <Grid container columnSpacing={0} alignItems="center">
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              mb: 20,
              [theme.breakpoints.up('lg')]: {
                mb: 0,
              },
            }}
          >
            <Box
              sx={{
                width: 230,
                [theme.breakpoints.up('lg')]: {
                  width: '100%',
                },
              }}
            >
              <Image
                src="/images/dc-comics.png"
                alt="DC Comics"
                height={789}
                width={502}
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Slide
              direction="down"
              in={true}
              easing={{ enter: theme.transitions.easing.easeOut }}
              timeout={1000}
              sx={{
                position: 'absolute',
                top: -94,
                right: '1%',
                [theme.breakpoints.down('lg')]: {
                  display: 'none',
                },
                [theme.breakpoints.up('xl')]: {
                  right: '14%',
                },
              }}
            >
              <Box>
                <Image
                  src="/images/spider-man.png"
                  alt="Spider man"
                  height={520}
                  width={390}
                />
              </Box>
            </Slide>
            <Box>
              <Typography variant="h1" sx={{ mb: 15 }} color="white">
                Create Your own Team of Superheroes
              </Typography>
              <Link href="/search" variant="contained" color="secondary">
                Enter
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
