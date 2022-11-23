import { Box, Container, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import CustomCard from '../components/Card';
import Layout from '../components/Layout';
import CustomLink from '../components/Link';
import { TextureBg } from '../components/Texture';
import theme from '../styles/theme';
import { superheroesInfo } from './_app';

export default function Team() {
  const { myTeam } = useContext(superheroesInfo);

  return (
    <Layout>
      <TextureBg />
      <Container maxWidth='lg' sx={{ pt: '50px', pb: '50px' }}>
        {myTeam.length ? (
          <Grid container columnSpacing={18} rowSpacing={13}>
            {myTeam.map(superhero => {
              return (
                <Grid item xs={12} sm={6} lg={3} key={superhero}>
                  <CustomCard superhero={superhero.id} switch />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Box>
            <Typography sx={{ display: 'block' }} variant='body2'>
              You do not have any team members selected. Please make selections
              on
            </Typography>
            <CustomLink href='/search' sx={{ padding: 0 }} size='none'>
              <Typography
                variant='body2'
                color='main'
                sx={{
                  color: theme.palette.primary.main,
                  textTransform: 'none',
                }}
              >
                superheros page
              </Typography>
            </CustomLink>
          </Box>
        )}
      </Container>
    </Layout>
  );
}
