import { Fade, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React, { useContext, useEffect, useRef, useState } from 'react';
import CustomCard from '../components/card';
import Layout from '../components/layout';
import { TextureBg } from '../components/texture';
import Superhero from './api/superheroADK';
import { superheroesInfo } from './_app';

function Search() {
  const [loading, setLoading] = useState(true);
  const [superheroes, setSuperheroes] = useState([]);
  const [lastElement, setLastElement] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const { searchParams, setSearchParams, currentPage, setCurrentPage } =
    useContext(superheroesInfo);

  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setCurrentPage((no) => no + 1);
      }
    });
  }, []);

  const getSuperheroes = async () => {
    setLoading(true);
    const response = await Superhero.search(
      `/getAll?`,
      `${currentPage}&limit=8`,
      searchParams
    );
    let all = new Set([...superheroes, ...response.data]);
    setSuperheroes([...all]);
    setTotalPages(response.totalPages);
    setLoading(false);
  };

  useEffect(() => {
    if (currentPage <= totalPages) {
      getSuperheroes();
    }
  }, [currentPage]);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  return (
    <Layout>
      <TextureBg />
      <Container maxWidth="lg" sx={{ pt: '50px', pb: '250px' }}>
        <Grid container columnSpacing={18} rowSpacing={13}>
          {superheroes.map((superhero, index) => {
            return (
              <Fade
                in
                key={index}
                easing="ease-out"
                style={{
                  transitionDuration: '200ms',
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={3}
                  key={index}
                  ref={setLastElement}
                >
                  <CustomCard superhero={superhero} />
                </Grid>
              </Fade>
            );
          })}
        </Grid>
        {loading && (
          <Typography variant="h4" component="h2" mt={30} textAlign="center">
            Loading
          </Typography>
        )}

        {currentPage - 1 === totalPages && (
          <Typography variant="h4" component="h2" mt={30} textAlign="center">
            The End
          </Typography>
        )}
      </Container>
    </Layout>
  );
}

export default Search;
