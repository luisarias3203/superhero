import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import CustomLink from '../components/link';
import BlueBg from '../public/images/blue-background.png';
import DC from '../public/images/dc-comics.png';
import SpiderMan from '../public/images/spider-man.png';
import theme from '../styles/theme';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        pb: 7,
        pt: 15,
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
          src={BlueBg}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="blue background"
          priority
        />
      </Box>
      <Container maxWidth="lg" align="center">
        <Grid container columnSpacing={0} alignItems="center">
          <Grid item xs={12} lg={6} mb={{ xs: 10, lg: 0 }}>
            <Box width={{ xs: 180, lg: '100%' }}>
              <Image src={DC} alt="DC Comics" />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Slide
              direction="down"
              in
              easing={{ enter: theme.transitions.easing.easeOut }}
              timeout={1000}
              sx={{
                position: 'absolute',
                right: '5%',
                width: 100,
                top: -8,
                [theme.breakpoints.up('lg')]: {
                  right: '14%',
                  top: -94,
                  width: 390,
                },
              }}
            >
              <Box>
                <Image src={SpiderMan} alt="Spider man" />
              </Box>
            </Slide>
            <Box>
              <Typography variant="h1" mb={15} color="white">
                Create Your own Team of Superheroes
              </Typography>
              <CustomLink
                href="/search"
                variant="contained"
                color="secondary"
                size="large"
              >
                Enter
              </CustomLink>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
