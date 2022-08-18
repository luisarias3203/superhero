import styled from '@emotion/styled';
import { common } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import React from 'react';

const StyleSwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-switchBase': {
    padding: 8,
    '&.Mui-checked': {
      color: common.white,
      '& + .MuiSwitch-track': {
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-track': {
    backgroundColor: '#BFBFBF',
    borderRadius: 12,
    opacity: 1,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
      '& .Mui-checked': {
        color: common.white,
      },
    },
    '&:before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        common.white
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    '&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        common.white
      )}" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 18,
    height: 18,
    margin: 2,
  },
}));

function CustomSwitch({ label, labelPlacement }) {
  return (
    <FormGroup row>
      <FormControlLabel
        control={<StyleSwitch color="secondary" />}
        label={label}
        labelPlacement={labelPlacement}
      />
    </FormGroup>
  );
}

CustomSwitch.defaultProps = {
  label: 'Add to Team',
  labelPlacement: 'start',
};

export default CustomSwitch;
