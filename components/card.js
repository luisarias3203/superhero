import styled from '@emotion/styled';
import ExpandCircleDownOutlined from '@mui/icons-material/ExpandCircleDownOutlined';
import { alpha, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import { common } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import BgCard from '../public/images/bg-card.svg';
import CustomSwitch from './switch';

const CustomCardMedia = styled(CardMedia)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
  zIndex: -2,
}));

const CustomCardContent = styled(Box)(({ theme, expanded }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignContent: 'flex-end',
  color: common.white,
  position: 'relative',
  textAlign: 'center',
  padding: '16px 16px 40px',
  zIndex: 1,
  minHeight: 400,
  border: `4px solid transparent`,
  transition: theme.transitions.create('border', {
    duration: theme.transitions.duration.complex,
  }),
  '&:hover': {
    border:
      expanded === 'false'
        ? `4px solid ${theme.palette.secondary.main}`
        : '4px solid transparent',
  },
  '&:after': {
    background: `linear-gradient(180deg, transparent 0%, ${alpha(
      common.black,
      0.53
    )} 36.63%, ${common.black} 100%)`,
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -2,
    width: '100%',
    height: 170,
    opacity: expanded === 'false' ? 1 : 0,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.complex,
    }),
    content: "''",
  },
  '&:before': {
    background: `${theme.palette.primary.main} url(${BgCard.src}) bottom /contain no-repeat`,
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    width: '100%',
    height: '100%',
    opacity: expanded === 'false' ? 0 : 1,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.complex,
    }),
    content: "''",
  },
}));

const CustomCardButton = styled(IconButton)(({ theme, expanded }) => ({
  bottom: 10,
  color: common.white,
  left: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 4,
  position: 'absolute',
  right: 0,
  width: 28,
  height: 28,
  transform: expanded === 'false' ? 'rotate(180deg)' : '',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.complex,
  }),
}));

export default function CustomCard() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        boxShadow: 'none',
        position: 'relative',
        background: 'transparent',
      }}
    >
      <CustomCardContent expanded={expanded.toString()}>
        <CustomCardMedia
          component="img"
          height="100%"
          alt="image"
          image="https://i.picsum.photos/id/1055/536/354.jpg?hmac=Hn5PGfnC-Vl2rw83fls2cbf4Erp2tKUF1vJFW9xkU5w"
        />
        <Typography variant="h2" sx={{ mb: 3, width: '100%' }}>
          Wolverine
        </Typography>
        <CustomSwitch />
        <Collapse in={expanded}>
          <Typography variant="h3" component="p" mb={2.5}>
            Intelligence : 94
          </Typography>
          <Typography variant="h3" component="p" mb={2.5}>
            strength : 80
          </Typography>
          <Typography variant="h3" component="p" mb={2.5}>
            Speed : 21
          </Typography>
          <Typography variant="h3" component="p" mb={2.5}>
            Durability : 20
          </Typography>
          <Typography variant="h3" component="p" mb={2.5}>
            Power : 92
          </Typography>
          <Typography variant="h3" component="p" mb={2.5}>
            combat : 70
          </Typography>
        </Collapse>
        <CustomCardButton
          expanded={expanded.toString()}
          onClick={handleExpandClick}
          aria-label="Show more"
          size="large"
          aria-expanded={expanded}
        >
          <ExpandCircleDownOutlined fontSize="inherit" />
        </CustomCardButton>
      </CustomCardContent>
    </Card>
  );
}
