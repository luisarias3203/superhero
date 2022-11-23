import { alpha, Box, Grid, styled, Typography } from '@mui/material';
import { common } from '@mui/material/colors';
import { Container } from '@mui/system';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import CustomSwitch from '../../components/Switch';
import { TextureBg } from '../../components/Texture';
import theme from '../../styles/theme';
import Superhero from '../api/superheroADK';

const ImageBox = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignContent: 'flex-end',
  color: common.white,
  position: 'relative',
  textAlign: 'center',
  padding: '16px 16px 40px',
  zIndex: 1,
  height: '100%',
  minHeight: 300,
  '&:after': {
    background: `linear-gradient(180deg, transparent 0%, ${alpha(
      common.black,
      0.53
    )} 36.63%, ${common.black} 100%)`,
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    width: '100%',
    height: '300px',
    content: "''",
  },
}));

export default function HeroDetail({ superhero }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Typography variant='h4' component='h2' mt={30} textAlign='center'>
        Loading
      </Typography>
    );
  }

  return (
    <Layout>
      <TextureBg orange />
      {superhero && (
        <Grid container>
          {superhero.images && (
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                marginBottom: '30px',
                position: 'relative',
                [theme.breakpoints.up('md')]: {
                  minHeight: 'calc(100vh - 115px)',
                  marginBottom: 0,
                },
              }}
            >
              <Image
                src={superhero.images.lg}
                layout='fill'
                objectFit='cover'
                quality={100}
                alt={superhero.name}
                priority
              />
              <ImageBox>
                <Typography
                  variant='caption'
                  sx={{ mb: 3, width: '100%' }}
                  component='h2'
                >
                  {superhero.name}
                </Typography>
                <CustomSwitch superhero={superhero} />
              </ImageBox>
            </Grid>
          )}
          <Grid item xs={12} md={7} mb={{ xs: 20, md: 0 }}>
            <Container maxWidth='false' sx={{ padding: { md: '75px 50px' } }}>
              <Grid container>
                {superhero.powerstats && (
                  <Grid item xs={12} lg={6} mb={12}>
                    <Typography variant='h3' component='h2' mb={7}>
                      Powerstats
                    </Typography>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box mb={2} display='flex'>
                          <Typography
                            variant='body1'
                            component='strong'
                            fontWeight='bold'
                          >
                            Intelligence:
                          </Typography>
                          <Typography variant='body1' component='span' ml={2}>
                            {superhero.powerstats.intelligence}
                          </Typography>
                        </Box>
                        <Box mb={2} display='flex'>
                          <Typography
                            variant='body1'
                            component='strong'
                            fontWeight='bold'
                          >
                            Strength:
                          </Typography>
                          <Typography variant='body1' component='span' ml={2}>
                            {superhero.powerstats.strength}
                          </Typography>
                        </Box>
                        <Box mb={2} display='flex'>
                          <Typography
                            variant='body1'
                            component='strong'
                            fontWeight='bold'
                          >
                            Speed:
                          </Typography>
                          <Typography variant='body1' component='span' ml={2}>
                            {superhero.powerstats.speed}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box mb={2} display='flex'>
                          <Typography
                            variant='body1'
                            component='strong'
                            fontWeight='bold'
                          >
                            Durability:
                          </Typography>
                          <Typography variant='body1' component='span' ml={2}>
                            {superhero.powerstats.durability}
                          </Typography>
                        </Box>
                        <Box mb={2} display='flex'>
                          <Typography
                            variant='body1'
                            component='strong'
                            fontWeight='bold'
                          >
                            Power:
                          </Typography>
                          <Typography variant='body1' component='span' ml={2}>
                            {superhero.powerstats.power}
                          </Typography>
                        </Box>
                        <Box mb={2} display='flex'>
                          <Typography
                            variant='body1'
                            component='strong'
                            fontWeight='bold'
                          >
                            Combat:
                          </Typography>
                          <Typography variant='body1' component='span' ml={2}>
                            {superhero.powerstats.combat}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
                {superhero.appearance && (
                  <Grid item xs={12} lg={6} mb={12}>
                    <Typography variant='h3' component='h2' mb={7}>
                      Appearance
                    </Typography>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box mb={2} display='flex'>
                          <Typography
                            variant='body1'
                            component='strong'
                            fontWeight='bold'
                          >
                            Gender:
                          </Typography>
                          <Typography variant='body1' component='span' ml={2}>
                            {superhero.appearance.gender}
                          </Typography>
                        </Box>
                        <Box mb={2} display='flex'>
                          <Typography
                            variant='body1'
                            component='strong'
                            fontWeight='bold'
                          >
                            Race:
                          </Typography>
                          <Typography variant='body1' component='span' ml={2}>
                            {superhero.appearance.race || '-'}
                          </Typography>
                        </Box>
                        <Box mb={2} display='flex'>
                          <Typography
                            variant='body1'
                            component='strong'
                            fontWeight='bold'
                          >
                            Height:
                          </Typography>
                          <Typography variant='body1' component='span' ml={2}>
                            {superhero.appearance.height.length > 1
                              ? `${superhero.appearance.height[0].value} /
                            ${superhero.appearance.height[1].value}`
                              : `${superhero.appearance.height[0].value}`}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box mb={2} display='flex'>
                          <Typography
                            variant='body1'
                            component='strong'
                            fontWeight='bold'
                          >
                            Weight:
                          </Typography>
                          <Typography variant='body1' component='span' ml={2}>
                            {superhero.appearance.weight.length > 1
                              ? `${superhero.appearance.weight[0].value} /
                            ${superhero.appearance.weight[1].value}`
                              : `${superhero.appearance.weight[0].value}`}
                          </Typography>
                        </Box>
                        <Box mb={2} display='flex'>
                          <Typography
                            variant='body1'
                            component='strong'
                            fontWeight='bold'
                          >
                            Eye Color:
                          </Typography>
                          <Typography variant='body1' component='span' ml={2}>
                            {superhero.appearance.eyeColor}
                          </Typography>
                        </Box>
                        <Box mb={2} display='flex'>
                          <Typography
                            variant='body1'
                            component='strong'
                            fontWeight='bold'
                          >
                            Hair Color:
                          </Typography>
                          <Typography variant='body1' component='span' ml={2}>
                            {superhero.appearance.hairColor}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
              </Grid>
              {superhero.biography && (
                <Box mb={5}>
                  <Typography variant='h3' component='h2' mb={7}>
                    Biography
                  </Typography>
                  <Box mb={2} display='flex'>
                    <Typography
                      variant='body1'
                      component='strong'
                      fontWeight='bold'
                    >
                      Full Name:
                    </Typography>
                    <Typography variant='body1' component='span' ml={2}>
                      {superhero.biography.fullName || superhero.name}
                    </Typography>
                  </Box>
                  <Box mb={2} display='flex'>
                    <Typography
                      variant='body1'
                      component='strong'
                      fontWeight='bold'
                    >
                      Alter Egos:
                    </Typography>
                    <Typography variant='body1' component='span' ml={2}>
                      {superhero.biography.alterEgos}
                    </Typography>
                  </Box>
                  <Box mb={2} display='flex'>
                    <Typography
                      variant='body1'
                      component='strong'
                      fontWeight='bold'
                    >
                      Aliases:
                    </Typography>
                    <Typography variant='body1' component='span' ml={2}>
                      {superhero.biography.aliases &&
                        superhero.biography.aliases
                          .map(item => item.value)
                          .join(', ')}
                    </Typography>
                  </Box>
                  <Box mb={2} display='flex'>
                    <Typography
                      variant='body1'
                      component='strong'
                      fontWeight='bold'
                    >
                      Place of Birth:
                    </Typography>
                    <Typography variant='body1' component='span' ml={2}>
                      {superhero.biography.placeOfBirth}
                    </Typography>
                  </Box>
                  <Box mb={2} display='flex'>
                    <Typography
                      variant='body1'
                      component='strong'
                      fontWeight='bold'
                    >
                      Alignment:
                    </Typography>
                    <Typography
                      variant='body1'
                      component='span'
                      ml={2}
                      sx={{ textTransform: 'capitalize' }}
                    >
                      {superhero.biography.alignment}
                    </Typography>
                  </Box>
                </Box>
              )}
              {superhero.work && (
                <Box>
                  <Typography variant='h3' component='h2' mb={7}>
                    Work
                  </Typography>
                  <Box mb={2} display='flex'>
                    <Typography
                      variant='body1'
                      component='strong'
                      fontWeight='bold'
                    >
                      Occupation:
                    </Typography>
                    <Typography variant='body1' component='span' ml={2}>
                      {superhero.work.occupation}
                    </Typography>
                  </Box>
                  <Box mb={2} display='flex'>
                    <Typography
                      variant='body1'
                      component='strong'
                      fontWeight='bold'
                    >
                      Base:
                    </Typography>
                    <Typography variant='body1' component='span' ml={2}>
                      {superhero.work.base}
                    </Typography>
                  </Box>
                </Box>
              )}
            </Container>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  const superheroes = await Superhero.search(`/getAll?`, '0&limit=0');

  const data = superheroes.data ? superheroes.data : [];

  const paths = data.map(superhero => {
    return {
      params: { id: `${superhero.slug}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const superhero = await Superhero.search(`/getBySlug/${params.id}`);

  return {
    props: {
      superhero,
    },
  };
}
