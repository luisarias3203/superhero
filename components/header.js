import styled from '@emotion/styled';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { common } from '@mui/material/colors';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import CustomLink from '../components/link';
import theme from '../styles/theme';

const CustomHeader = styled(AppBar)(({ theme }) => ({
  backgroundColor: common.white,
  left: 0,
  boxShadow: '0 2px 4px 0 rgba(176,176,176,0.5)',
}));

const Logo = styled(Box)(({ theme }) => ({
  bottom: 0,
  display: 'flex',
  left: 0,
  justifyContent: 'center',
  margin: 'auto',
  position: 'absolute',
  right: 0,
  top: 0,
  width: 200,
  [theme.breakpoints.up('sm')]: {
    margin: 0,
    position: 'static',
    width: 'auto',
  },
}));

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  zIndex: 1,
  '& .MuiDrawer-paper': {
    width: '100%',
  },
}));

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <CustomHeader position="sticky">
      <Container maxWidth="xl" component="nav">
        <Toolbar variant="dense">
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{ display: { sm: 'none' }, color: common.black }}
          >
            {open ? (
              <CloseRoundedIcon fontSize="large" />
            ) : (
              <SortRoundedIcon fontSize="large" />
            )}
          </IconButton>
          <Logo>
            <CustomLink
              href="/"
              sx={{
                color: common.black,
                [theme.breakpoints.down('sm')]: { padding: 0 },
              }}
              variant="text"
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  [theme.breakpoints.down('sm')]: { fontSize: '16px' },
                }}
              >
                SuperSearch
              </Typography>
            </CustomLink>
          </Logo>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <CustomLink
              href="/search"
              sx={{ padding: '5px 12px' }}
              variant="text"
            >
              <Typography
                variant="body2"
                sx={{ color: common.black, textTransform: 'none' }}
              >
                Superheroes
              </Typography>
            </CustomLink>
            <CustomLink
              href="/my-team"
              sx={{ padding: '5px 12px' }}
              variant="text"
            >
              <Typography
                variant="body2"
                sx={{ color: common.black, textTransform: 'none' }}
              >
                My Team
              </Typography>
            </CustomLink>
          </Box>
        </Toolbar>
      </Container>
      <CustomDrawer anchor="left" open={open} hideBackdrop={true}>
        <Toolbar variant="dense" />
        <CustomLink
          href="/search"
          sx={{ padding: '10px', marginTop: '20px' }}
          variant="text"
        >
          <Typography
            variant="body2"
            sx={{ color: common.black, textTransform: 'none' }}
          >
            Superheroes
          </Typography>
        </CustomLink>
        <CustomLink
          href="/my-team"
          sx={{ padding: '10px', marginTop: '20px' }}
          variant="text"
        >
          <Typography
            variant="body2"
            sx={{ color: common.black, textTransform: 'none' }}
          >
            My Team
          </Typography>
        </CustomLink>
      </CustomDrawer>
    </CustomHeader>
  );
}
