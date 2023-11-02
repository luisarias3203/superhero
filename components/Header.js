import styled from '@emotion/styled'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined'
import SortRoundedIcon from '@mui/icons-material/SortRounded'
import { Button, Toolbar, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { common } from '@mui/material/colors'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import { useRouter } from 'next/router'
import { useState } from 'react'
import theme from '../styles/theme'
import Filter from './Filter'
import CustomLink from './Link'

const CustomHeader = styled(AppBar)(({ theme }) => ({
  color: common.black,
  backgroundColor: common.white,
  left: 0,
  boxShadow: '0 2px 4px 0 rgba(176,176,176,0.5)',
  zIndex: theme.zIndex.modal
}))

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
    width: 'auto'
  }
}))

const CustomDrawer = styled(Drawer)(() => ({
  top: '55px',
  width: '100%',
  '& .MuiDrawer-paper': {
    alignItems: 'center',
    boxShadow: 'none',
    top: '55px',
    width: '100%'
  }
}))

const links = [
  {
    text: 'Superheroes',
    href: '/search'
  },
  {
    text: 'My Team',
    href: '/my-team'
  }
]

const Link = styled(CustomLink)(({ theme }) => ({
  color: common.black,
  textTransform: 'none',
  borderRadius: 0,
  marginTop: '40px',
  padding: 0,
  '&:after': {
    backgroundColor: theme.palette.primary.main,
    content: '""',
    height: '3px',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '-8px',
    width: '100%'
  },
  [theme.breakpoints.up('md')]: {
    marginRight: '30px',
    marginTop: 0,
    '&:after': {
      width: 'calc(100% - 20px)'
    }
  }
}))

export default function Header () {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)
  const router = useRouter()

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer)
    if (openFilter) setOpenFilter(false)
  }

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter)
    if (openDrawer) setOpenDrawer(false)
  }

  return (
    <CustomHeader position='sticky'>
      <Container maxWidth='xl' component='nav'>
        <Toolbar variant='dense' sx={{ padding: { xs: '10px 0', md: 0 } }}>
          <IconButton
            aria-label='open drawer'
            onClick={handleOpenDrawer}
            sx={{ display: { md: 'none' }, color: common.black, padding: 0 }}
          >
            {openDrawer
              ? (
                <CloseRoundedIcon fontSize='large' />
                )
              : (
                <SortRoundedIcon fontSize='large' />
                )}
          </IconButton>
          <Logo>
            <CustomLink
              href='/'
              sx={{
                color: common.black,
                padding: 0
              }}
              variant='text'
            >
              <Typography
                variant='h2'
                component='h1'
                sx={{
                  [theme.breakpoints.down('md')]: { fontSize: '16px' }
                }}
              >
                SuperSearch
              </Typography>
            </CustomLink>
          </Logo>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {links.map(item => {
              return (
                <Link
                  href={item.href}
                  key={item.text}
                  variant='text'
                  sx={{
                    '&:after': {
                      display: router.pathname === item.href ? 'block' : 'none'
                    }
                  }}
                >
                  <Typography variant='body2'>{item.text}</Typography>
                </Link>
              )
            })}
          </Box>
          {router.pathname === '/search' && (
            <Box sx={{ marginLeft: 'auto' }} id='filter-options'>
              <Button
                variant={openFilter ? 'contained' : 'outlined'}
                color='secondary'
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
      {router.pathname === '/search' && <Filter openFilter={openFilter} />}
      <CustomDrawer anchor='left' open={openDrawer} hideBackdrop>
        {links.map(item => {
          return (
            <Link
              href={item.href}
              key={item.text}
              variant='text'
              sx={{
                '&:after': {
                  display: router.pathname === item.href ? 'block' : 'none'
                }
              }}
            >
              <Typography variant='body2'>{item.text}</Typography>
            </Link>
          )
        })}
      </CustomDrawer>
    </CustomHeader>
  )
}
