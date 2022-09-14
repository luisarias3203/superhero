import { alpha, Box, Grid, styled, Typography } from '@mui/material';
import { common } from '@mui/material/colors';
import { Container } from '@mui/system';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import RelatedCharacters from '../../components/relatedCharacters';
import CustomSwitch from '../../components/switch';
import { TextureBg } from '../../components/texture';
import Superhero from '../api/superheroADK';

const ImageBox = styled(Box)(({ theme, expanded }) => ({
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

export default function HeroDetail() {
  const [superheroDetail, setSuperheroDetail] = useState();

  const router = useRouter();
  const { id } = router.query;
  const requestParams = `/get/${id}`;

  useEffect(() => {
    Superhero.search(requestParams).then((superheroes) => {
      setSuperheroDetail(superheroes);
    });
  }, []);

  return (
    <Layout>
      <TextureBg orange />
      {superheroDetail && (
        <Grid container>
          <Grid
            item
            xs={12}
            md={5}
            sx={{ position: 'relative' }}
            mb={{ xs: 10, md: 0 }}
          >
            <Image
              src={superheroDetail.images.lg}
              layout="fill"
              objectFit="cover"
              quality={100}
              alt={superheroDetail.name}
            />
            <ImageBox>
              <Typography
                variant="caption"
                sx={{ mb: 3, width: '100%' }}
                component="h2"
              >
                {superheroDetail.name}
              </Typography>
              <CustomSwitch />
            </ImageBox>
          </Grid>
          <Grid item xs={12} md={7} mb={{ xs: 20, md: 0 }}>
            <Container maxWidth="false" sx={{ padding: { md: '75px 50px' } }}>
              <Grid container>
                <Grid item xs={12} lg={6} mb={12}>
                  <Typography variant="h2" component="h2" mb={7}>
                    Powerstats
                  </Typography>
                  <Grid container>
                    <Grid item xs={6}>
                      <Box mb={2} display="flex">
                        <Typography
                          variant="body1"
                          component="strong"
                          fontWeight="bold"
                        >
                          Intelligence:
                        </Typography>
                        <Typography variant="body1" component="span" ml={2}>
                          {superheroDetail.powerstats.intelligence}
                        </Typography>
                      </Box>
                      <Box mb={2} display="flex">
                        <Typography
                          variant="body1"
                          component="strong"
                          fontWeight="bold"
                        >
                          Strength:
                        </Typography>
                        <Typography variant="body1" component="span" ml={2}>
                          {superheroDetail.powerstats.strength}
                        </Typography>
                      </Box>
                      <Box mb={2} display="flex">
                        <Typography
                          variant="body1"
                          component="strong"
                          fontWeight="bold"
                        >
                          Speed:
                        </Typography>
                        <Typography variant="body1" component="span" ml={2}>
                          {superheroDetail.powerstats.speed}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box mb={2} display="flex">
                        <Typography
                          variant="body1"
                          component="strong"
                          fontWeight="bold"
                        >
                          Durability:
                        </Typography>
                        <Typography variant="body1" component="span" ml={2}>
                          {superheroDetail.powerstats.durability}
                        </Typography>
                      </Box>
                      <Box mb={2} display="flex">
                        <Typography
                          variant="body1"
                          component="strong"
                          fontWeight="bold"
                        >
                          Power:
                        </Typography>
                        <Typography variant="body1" component="span" ml={2}>
                          {superheroDetail.powerstats.power}
                        </Typography>
                      </Box>
                      <Box mb={2} display="flex">
                        <Typography
                          variant="body1"
                          component="strong"
                          fontWeight="bold"
                        >
                          Combat:
                        </Typography>
                        <Typography variant="body1" component="span" ml={2}>
                          {superheroDetail.powerstats.combat}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={6} mb={12}>
                  <Typography variant="h2" component="h2" mb={7}>
                    Appearance
                  </Typography>
                  <Grid container>
                    <Grid item xs={6}>
                      <Box mb={2} display="flex">
                        <Typography
                          variant="body1"
                          component="strong"
                          fontWeight="bold"
                        >
                          Gender:
                        </Typography>
                        <Typography variant="body1" component="span" ml={2}>
                          {superheroDetail.appearance.gender}
                        </Typography>
                      </Box>
                      <Box mb={2} display="flex">
                        <Typography
                          variant="body1"
                          component="strong"
                          fontWeight="bold"
                        >
                          Race:
                        </Typography>
                        <Typography variant="body1" component="span" ml={2}>
                          {superheroDetail.appearance.race || '-'}
                        </Typography>
                      </Box>
                      <Box mb={2} display="flex">
                        <Typography
                          variant="body1"
                          component="strong"
                          fontWeight="bold"
                        >
                          Height:
                        </Typography>
                        <Typography variant="body1" component="span" ml={2}>
                          {`${superheroDetail.appearance.height[0].value} /
                            ${superheroDetail.appearance.height[1].value}`}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box mb={2} display="flex">
                        <Typography
                          variant="body1"
                          component="strong"
                          fontWeight="bold"
                        >
                          Weight:
                        </Typography>
                        <Typography variant="body1" component="span" ml={2}>
                          {`${superheroDetail.appearance.weight[1].value} /
                            ${superheroDetail.appearance.weight[0].value}`}
                        </Typography>
                      </Box>
                      <Box mb={2} display="flex">
                        <Typography
                          variant="body1"
                          component="strong"
                          fontWeight="bold"
                        >
                          Eye Color:
                        </Typography>
                        <Typography variant="body1" component="span" ml={2}>
                          {superheroDetail.appearance.eyeColor}
                        </Typography>
                      </Box>
                      <Box mb={2} display="flex">
                        <Typography
                          variant="body1"
                          component="strong"
                          fontWeight="bold"
                        >
                          Hair Color:
                        </Typography>
                        <Typography variant="body1" component="span" ml={2}>
                          {superheroDetail.appearance.hairColor}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Box mb={5}>
                <Typography variant="h2" component="h2" mb={7}>
                  Biography
                </Typography>
                <Box mb={2} display="flex">
                  <Typography
                    variant="body1"
                    component="strong"
                    fontWeight="bold"
                  >
                    Full Name:
                  </Typography>
                  <Typography variant="body1" component="span" ml={2}>
                    {superheroDetail.biography.fullName || superheroDetail.name}
                  </Typography>
                </Box>
                <Box mb={2} display="flex">
                  <Typography
                    variant="body1"
                    component="strong"
                    fontWeight="bold"
                  >
                    Alter Egos:
                  </Typography>
                  <Typography variant="body1" component="span" ml={2}>
                    {superheroDetail.biography.alterEgos}
                  </Typography>
                </Box>
                <Box mb={2} display="flex">
                  <Typography
                    variant="body1"
                    component="strong"
                    fontWeight="bold"
                  >
                    Aliases:
                  </Typography>
                  <Typography variant="body1" component="span" ml={2}>
                    {superheroDetail.biography.aliases
                      .map((item) => item.value)
                      .join(', ')}
                  </Typography>
                </Box>
                <Box mb={2} display="flex">
                  <Typography
                    variant="body1"
                    component="strong"
                    fontWeight="bold"
                  >
                    Place of Birth:
                  </Typography>
                  <Typography variant="body1" component="span" ml={2}>
                    {superheroDetail.biography.placeOfBirth}
                  </Typography>
                </Box>
                <Box mb={2} display="flex">
                  <Typography
                    variant="body1"
                    component="strong"
                    fontWeight="bold"
                  >
                    Alignment:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    ml={2}
                    sx={{ textTransform: 'capitalize' }}
                  >
                    {superheroDetail.biography.alignment}
                  </Typography>
                </Box>
              </Box>
              <Box mb={8}>
                <Typography variant="h2" component="h2" mb={7}>
                  Work
                </Typography>
                <Box mb={2} display="flex">
                  <Typography
                    variant="body1"
                    component="strong"
                    fontWeight="bold"
                  >
                    Occupation:
                  </Typography>
                  <Typography variant="body1" component="span" ml={2}>
                    {superheroDetail.work.occupation}
                  </Typography>
                </Box>
                <Box mb={2} display="flex">
                  <Typography
                    variant="body1"
                    component="strong"
                    fontWeight="bold"
                  >
                    Base:
                  </Typography>
                  <Typography variant="body1" component="span" ml={2}>
                    {superheroDetail.work.base}
                  </Typography>
                </Box>
              </Box>
              <RelatedCharacters
                connections={superheroDetail.connections.groupaffiliation}
              />
            </Container>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}
