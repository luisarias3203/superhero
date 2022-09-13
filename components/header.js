import styled from '@emotion/styled';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import { Button, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { common } from '@mui/material/colors';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import CustomLink from '../components/link';
import theme from '../styles/theme';
import Filter from './filter';

const CustomHeader = styled(AppBar)(({ theme }) => ({
  color: common.black,
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
  [theme.breakpoints.up('md')]: {
    margin: '0 40px 0 0',
    position: 'static',
    width: 'auto',
  },
}));

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  top: '57px',
  width: '100%',
  '& .MuiDrawer-paper': {
    boxShadow: 'none',
    top: '57px',
    width: '100%',
  },
}));

export default function Header(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const router = useRouter();

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
    if (openFilter) setOpenFilter(false);
  };

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
    if (openDrawer) setOpenDrawer(false);
  };

  return (
    <CustomHeader position="sticky">
      <Container maxWidth="xl" component="nav">
        <Toolbar variant="dense" sx={{ padding: { xs: '10px 0', md: 0 } }}>
          <IconButton
            aria-label="open drawer"
            onClick={handleOpenDrawer}
            sx={{ display: { md: 'none' }, color: common.black, padding: 0 }}
          >
            {openDrawer ? (
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
                padding: 0,
              }}
              variant="text"
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  [theme.breakpoints.down('md')]: { fontSize: '16px' },
                }}
              >
                SuperSearch
              </Typography>
            </CustomLink>
          </Logo>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
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
          {router.pathname == '/search' && (
            <Box sx={{ marginLeft: 'auto' }} id="filter-options">
              <Button
                variant={openFilter ? 'contained' : 'outlined'}
                color="secondary"
                onClick={handleOpenFilter}
              >
                <FilterListOutlinedIcon
                  sx={{ display: { xs: 'none', md: 'block' } }}
                />
                Filters
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
      <Filter openFilter={openFilter} searchSuperhero={props.searchSuperhero} />
      <CustomDrawer anchor="left" open={openDrawer} hideBackdrop={true}>
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
