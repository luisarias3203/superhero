import { alpha, Box, Grid, styled, Typography } from '@mui/material';
import { common } from '@mui/material/colors';
import { Container } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import Layout from '../../components/layout';
import RelatedCharacters from '../../components/relatedCharacters';
import CustomSwitch from '../../components/switch';
import { TextureBg } from '../../components/texture';

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
  return (
    <Layout>
      <TextureBg orange />
      <Grid container>
        <Grid
          item
          xs={12}
          md={5}
          sx={{ position: 'relative' }}
          mb={{ xs: 10, md: 0 }}
        >
          <Image
            src="https://dummyimage.com/1000x2000/aaa/fff"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="blue background"
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              zIndex: -2,
            }}
          />
          <ImageBox>
            <Typography
              variant="caption"
              sx={{ mb: 3, width: '100%' }}
              component="h2"
            >
              Hulk
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
                        88
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
                        100
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
                        63
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
                        100
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
                        98
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
                        85
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
                        Male
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
                        Human / Radiation
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
                        8’0’’
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
                        1400 lb
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
                        Green
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
                        Green
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
                  Bruce Banner
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
                  No alter egos found.
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
                  “Annihilator”, “Captain Universe”, “Joe Fixit”, “Mr. Fixit”,
                  “Mechano”, “Professor”, “Jade Jaws”, “Golly Green Giant”
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
                  Dayton, Ohio
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
                <Typography variant="body1" component="span" ml={2}>
                  Good
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
                  Nuclear physicist, Agent of S.H.I.E.LD.
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
                  (Banner) Hulkbuster Base, New Mexico, (Hulk) mobile, but
                  prefers New Mexico
                </Typography>
              </Box>
            </Box>
            <RelatedCharacters />
          </Container>
        </Grid>
      </Grid>
    </Layout>
  );
}
