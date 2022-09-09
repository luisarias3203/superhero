import { Avatar, Box, Grid, Typography } from '@mui/material';
import NextLink from 'next/link';
import React from 'react';
import theme from '../styles/theme';

function RelatedCharacters() {
  return (
    <Box>
      <Typography variant="h2" component="h2" mb={7}>
        Related Characters
      </Typography>
      <Box>
        <Grid container columnSpacing={18} rowSpacing={9}>
          <Grid item xs={4} sm={2}>
            <NextLink href="/search">
              <a>
                <Avatar
                  alt=""
                  sx={{
                    border: `2px solid ${theme.palette.primary.main}`,
                    width: 82,
                    height: 82,
                  }}
                  src="https://dummyimage.com/100x200/000/fff"
                />
              </a>
            </NextLink>
          </Grid>
          <Grid item xs={4} sm={2}>
            <NextLink href="/search">
              <a>
                <Avatar
                  alt=""
                  sx={{
                    border: `2px solid ${theme.palette.primary.main}`,
                    width: 82,
                    height: 82,
                  }}
                  src="https://dummyimage.com/100x200/000/fff"
                />
              </a>
            </NextLink>
          </Grid>
          <Grid item xs={4} sm={2}>
            <NextLink href="/search">
              <a>
                <Avatar
                  alt=""
                  sx={{
                    border: `2px solid ${theme.palette.primary.main}`,
                    width: 82,
                    height: 82,
                  }}
                  src="https://dummyimage.com/100x200/000/fff"
                />
              </a>
            </NextLink>
          </Grid>
          <Grid item xs={4} sm={2}>
            <NextLink href="/search">
              <a>
                <Avatar
                  alt=""
                  sx={{
                    border: `2px solid ${theme.palette.primary.main}`,
                    width: 82,
                    height: 82,
                  }}
                  src="https://dummyimage.com/100x200/000/fff"
                />
              </a>
            </NextLink>
          </Grid>
          <Grid item xs={4} sm={2}>
            <NextLink href="/search">
              <a>
                <Avatar
                  alt=""
                  sx={{
                    border: `2px solid ${theme.palette.primary.main}`,
                    width: 82,
                    height: 82,
                  }}
                  src="https://dummyimage.com/100x200/000/fff"
                />
              </a>
            </NextLink>
          </Grid>
          <Grid item xs={4} sm={2}>
            <NextLink href="/search">
              <a>
                <Avatar
                  alt=""
                  sx={{
                    border: `2px solid ${theme.palette.primary.main}`,
                    width: 82,
                    height: 82,
                  }}
                  src="https://dummyimage.com/100x200/000/fff"
                />
              </a>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default RelatedCharacters;
