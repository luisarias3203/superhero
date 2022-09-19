import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import CustomCard from '../components/card';
import Layout from '../components/layout';
import { TextureBg } from '../components/texture';
import Superhero from './api/superheroADK';

function Search() {
  const [superheroInfo, setSuperheroInfo] = useState([]);
  const requestParams = '/getAll?page=0&limit=8';
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Superhero.search(requestParams).then((superheroes) => {
      setSuperheroInfo(superheroes.data);
    });
  }, []);

  // if (isLoading) return <p>Loading...</p>;
  // if (!superheroList) return <p>No data</p>;

  return (
    <Layout>
      <TextureBg />
      <Container maxWidth="lg" sx={{ pt: '50px', pb: '50px' }}>
        <Grid container columnSpacing={18} rowSpacing={13}>
          {superheroInfo.map((superhero, index) => {
            return (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <CustomCard superhero={superhero} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
}

export default Search;
