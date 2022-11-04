import styled from '@emotion/styled';
import { common } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import { Box } from '@mui/system';
import { useContext, useEffect, useState } from 'react';
import { superheroesInfo } from '../pages/_app';
import CustomModal from './modal';

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

function CustomSwitch({ label, labelPlacement, color, superhero }) {
  const [checked, setChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalText, setModalText] = useState({});
  const { myTeam, setMyTeam } = useContext(superheroesInfo);

  useEffect(() => {
    const isSelected = myTeam.some((item) => {
      if (item.id === superhero.id) {
        return true;
      }
      return false;
    });
    setChecked(isSelected);
  }, [myTeam]);

  const handleModal = (open) => {
    setOpenModal(open);
  };

  const handleChange = (event) => {
    if (event.target.checked) {
      // Add superhero to myTeam
      if (
        myTeam.length >= 1 &&
        myTeam[0].biography.alignment !== superhero.biography.alignment
      ) {
        handleModal(true);
        setModalText({
          title: `Sorry! It looks like you started making a team of ${myTeam[0].biography.alignment.toLowerCase()} Superheros`,
          paragraph: `You can’t add a ${superhero.biography.alignment.toLowerCase()} Superhero to a ${myTeam[0].biography.alignment.toLowerCase()} team!`,
        });
        return;
      }
      if (myTeam.length >= 8) {
        handleModal(true);
        setModalText({
          title: 'Oops! You have too many team members',
          paragraph: 'You may only select 8 team members at a time.',
        });
        return;
      }
      setMyTeam((prev) => [...prev, superhero]);
    } else {
      // Remove superhero from myTeam
      setMyTeam(myTeam.filter((current) => current.name !== superhero.name));
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <FormGroup
        row
        sx={{
          mb: 1,
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <FormControlLabel
          control={
            <StyleSwitch
              color={color}
              checked={checked}
              onChange={handleChange}
            />
          }
          label={label}
          labelPlacement={labelPlacement}
          sx={{
            margin: 0,
          }}
        />
      </FormGroup>
      {openModal && (
        <CustomModal modalText={modalText} handleModal={handleModal} />
      )}
    </Box>
  );
}

CustomSwitch.defaultProps = {
  label: 'Add to Team',
  labelPlacement: 'start',
  color: 'secondary',
};

export default CustomSwitch;
