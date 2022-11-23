import styled from '@emotion/styled';
import ExpandCircleDownOutlined from '@mui/icons-material/ExpandCircleDownOutlined';
import { alpha, Box } from '@mui/material';
import Card from '@mui/material/Card';
import Collapse from '@mui/material/Collapse';
import { common } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { superheroesInfo } from '../pages/_app';
import BgCard from '../public/images/bg-card.svg';
import CustomLink from './Link';
import CustomSwitch from './Switch';

const CustomCardName = styled(Typography)(() => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  marginBottom: '3px',
  padding: 0,
  width: '100%',
  color: common.white,
}));

const CustomCardContent = styled(Box)(({ theme, expanded, selected }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignContent: 'flex-end',
  color: common.white,
  position: 'relative',
  textAlign: 'center',
  padding: '16px 10px 45px',
  zIndex: 1,
  minHeight: 400,
  borderStyle: 'solid',
  borderWidth: '4px',
  borderColor: selected ? `${theme.palette.secondary.main}` : '#f8f8f8',
  transition: theme.transitions.create('border', {
    duration: theme.transitions.duration.complex,
  }),
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
  bottom: 15,
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

export default function CustomCard({ superhero }) {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(false);
  const { myTeam } = useContext(superheroesInfo);

  useEffect(() => {
    const isSelected = myTeam.some(item => {
      if (item.id === superhero.id) {
        return true;
      }
      return false;
    });
    setSelected(isSelected);
  }, [myTeam, superhero.id]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        position: 'relative',
        '& > span': {
          maxHeight: 'calc(100% - 8px)',
          maxWidth: 'calc(100% - 8px)',
          margin: 'auto !important',
        },
      }}
    >
      <Image
        src={superhero.images.md}
        layout='fill'
        objectFit='cover'
        alt={superhero.name}
        priority
      />
      <CustomCardContent
        expanded={expanded.toString()}
        selected={Boolean(selected)}
      >
        <CustomLink
          href={`details/${superhero.slug}`}
          variant='text'
          sx={{ width: '100%' }}
        >
          <CustomCardName variant='h3'>{superhero.name}</CustomCardName>
        </CustomLink>
        <CustomSwitch superhero={superhero} />
        {superhero.powerstats && (
          <Collapse in={expanded}>
            <Typography variant='h4' component='p' mb={2.5}>
              Intelligence : {superhero.powerstats.intelligence || '-'}
            </Typography>
            <Typography variant='h4' component='p' mb={2.5}>
              strength : {superhero.powerstats.strength || '-'}
            </Typography>
            <Typography variant='h4' component='p' mb={2.5}>
              Speed : {superhero.powerstats.speed || '-'}
            </Typography>
            <Typography variant='h4' component='p' mb={2.5}>
              Durability : {superhero.powerstats.durability || '-'}
            </Typography>
            <Typography variant='h4' component='p' mb={2.5}>
              Power : {superhero.powerstats.power || '-'}
            </Typography>
            <Typography variant='h4' component='p' mb={2.5}>
              combat : {superhero.powerstats.combat || '-'}
            </Typography>
          </Collapse>
        )}
        <CustomCardButton
          expanded={expanded.toString()}
          onClick={handleExpandClick}
          aria-label='Show more'
          size='large'
          aria-expanded={expanded}
        >
          <ExpandCircleDownOutlined fontSize='inherit' />
        </CustomCardButton>
      </CustomCardContent>
    </Card>
  );
}
