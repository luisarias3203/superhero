import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import CustomLink from '../components/link';

const pages = ['Superheroes', 'My Team'];

export default function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <CustomLink href="/">
            <Typography variant="h3" component="h1">
              SuperSearch
            </Typography>
          </CustomLink>
          <Box></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
