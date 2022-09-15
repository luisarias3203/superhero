import styled from '@emotion/styled';
import ExpandCircleDownOutlined from '@mui/icons-material/ExpandCircleDownOutlined';
import { alpha, Box } from '@mui/material';
import Card from '@mui/material/Card';
import Collapse from '@mui/material/Collapse';
import { common } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React, { useState } from 'react';
import CustomLink from '../components/link';
import BgCard from '../public/images/bg-card.svg';
import CustomSwitch from './switch';

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
  borderStyle: 'solid',
  borderWidth: '4px',
  transition: theme.transitions.create('border', {
    duration: theme.transitions.duration.complex,
  }),
  '&:hover': {
    borderColor: expanded === 'false' ? `${theme.palette.secondary.main}` : '',
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

export default function CustomCard(props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        position: 'relative',
      }}
    >
      <Image
        src={props.superhero.images.md}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt={props.superhero.name}
      />
      <CustomCardContent expanded={expanded.toString()}>
        <CustomLink href={`details/${props.superhero.slug}`} variant="text">
          <Typography
            variant="h2"
            sx={{ mb: 3, width: '100%', color: common.white }}
          >
            {props.superhero.name}
          </Typography>
        </CustomLink>
        <CustomSwitch />
        <Collapse in={expanded}>
          <Typography variant="h3" component="p" mb={2.5}>
            Intelligence : {props.superhero.powerstats.intelligence}
          </Typography>
          <Typography variant="h3" component="p" mb={2.5}>
            strength : {props.superhero.powerstats.strength}
          </Typography>
          <Typography variant="h3" component="p" mb={2.5}>
            Speed : {props.superhero.powerstats.speed}
          </Typography>
          <Typography variant="h3" component="p" mb={2.5}>
            Durability : {props.superhero.powerstats.durability}
          </Typography>
          <Typography variant="h3" component="p" mb={2.5}>
            Power : {props.superhero.powerstats.power}
          </Typography>
          <Typography variant="h3" component="p" mb={2.5}>
            combat : {props.superhero.powerstats.combat}
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
