import { Close } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import theme from '../styles/theme';

const CustomModal = (props) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    props.handleModal(false);
  };

  return (
    <Modal
      onClose={handleClose}
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: 500,
          width: '90%',
          bgcolor: 'background.paper',
          borderRadius: '2px',
          p: '120px 55px',
          textAlign: 'center',
          [theme.breakpoints.up('md')]: { maxWidth: 600, width: '80%' },
        }}
      >
        <IconButton
          aria-label="Close modal"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: '15px',
            top: '15px',
          }}
        >
          <Close sx={{ fontSize: 26 }} />
        </IconButton>
        <Typography
          id="modal-modal-title"
          variant="h2"
          sx={{ textTransform: 'uppercase', marginBottom: '22px' }}
        >
          {props.modalText.title}
        </Typography>
        <Typography id="modal-modal-description" variant="body2">
          {props.modalText.paragraph}
        </Typography>
      </Box>
    </Modal>
  );
};

export default CustomModal;
