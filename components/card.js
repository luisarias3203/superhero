import styled from '@emotion/styled';
import ExpandCircleDownOutlined from '@mui/icons-material/ExpandCircleDownOutlined';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { common } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React from 'react';
import CustomSwitch from './switch';

const CustomCardContent = styled(CardContent)(({ theme }) => ({
  background: `linear-gradient(180deg, transparent 0%, ${alpha(
    common.black,
    0.53
  )} 36.63%, ${common.black} 100%)`,
  bottom: 0,
  color: common.white,
  textAlign: 'center',
  position: 'relative',
}));

const CustomCardMedia = styled(CardMedia)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
}));

export default function CustomCard() {
  return (
    <Card sx={{ boxShadow: 'none', position: 'relative', minHeight: 266 }}>
      <CustomCardMedia
        component="img"
        height="100%"
        alt="image"
        image="https://i.picsum.photos/id/1055/536/354.jpg?hmac=Hn5PGfnC-Vl2rw83fls2cbf4Erp2tKUF1vJFW9xkU5w"
      />
      <CustomCardContent>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Wolverine
        </Typography>
        <CustomSwitch />
        <IconButton
          aria-label="Show more"
          sx={{ p: 0, color: 'common.white' }}
          size="medium"
        >
          <ExpandCircleDownOutlined fontSize="inherit" />
        </IconButton>
        <Box>
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
        </Box>
      </CustomCardContent>
    </Card>
  );
}
