import { Box, Button, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import CustomCard from '../components/Card';
import Layout from '../components/Layout';
import { TextureBg } from '../components/Texture';
import { baseUrl, endPoint } from './api/superheroADK';
import { superheroesInfo } from './_app';

function Search() {
  const { searchParams } = useContext(superheroesInfo);
  const [superheroes, setSuperheroes] = useState([]);
  const [limit, setLimit] = useState(8);
  const currentPage = limit / 8 - 1;

  const params = `/getAll?page=0&limit=${limit}`;
  const url = `${baseUrl}${endPoint}${params}`;

  const fetcher = async (url, searchParams) => {
    // console.log(searchParams);
    const response = await fetch(url, {
      headers: {
        apiKey: `${process.env.API_KEY}`,
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(searchParams),
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      // console.log('jsonResponse', jsonResponse);
      return jsonResponse;
    }
  };

  const { data } = useSWR([url, searchParams], fetcher);

  const handleLimit = () => {
    setLimit(limit + 8);
  };

  useEffect(() => {
    if (data) {
      setSuperheroes(data.data);
    }
  }, [data]);

  useEffect(() => {
    setLimit(8);
  }, [searchParams]);

  return (
    <Layout>
      <TextureBg />
      <Container maxWidth='lg' sx={{ pt: '50px', pb: '250px' }}>
        <Grid container columnSpacing={18} rowSpacing={13}>
          {superheroes?.map(superhero => {
            return (
              <Grid item xs={12} sm={6} lg={3} key={superhero.id}>
                <CustomCard superhero={superhero} />
              </Grid>
            );
          })}
        </Grid>

        <Box textAlign='center'>
          {data && currentPage < data.totalPages - 1 && (
            <Button
              variant='contained'
              color='secondary'
              size='large'
              onClick={handleLimit}
              sx={{ mt: '50px' }}
            >
              Load More
            </Button>
          )}
          {!data && (
            <Typography variant='h4' component='h2' mt={30}>
              Loading
            </Typography>
          )}

          {data && currentPage >= data.totalPages - 1 && (
            <Typography variant='h4' component='h2' mt={30}>
              End
            </Typography>
          )}
        </Box>
      </Container>
    </Layout>
  );
}

export default Search;
