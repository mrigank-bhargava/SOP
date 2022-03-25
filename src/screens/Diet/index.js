import React from 'react';
import './style.css';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VegAudioPlayer from '../../Components/AudioPlayer/VegAudioPlayer'
import VeganAudio from '../../Components/AudioPlayer/VeganAudio'
import NonVegAudio from '../../Components/AudioPlayer/NonVegAudio'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Diet = () => {
  const [open, setOpen] = React.useState(false);
  const [openNonVeg, setOpenNonVeg] = React.useState(false);
  const [openVegan, setOpenVegan] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenNonVag = () => setOpenNonVeg(true);
  const handleCloseNonVeg = () => setOpenNonVeg(false);

  const handleOpenVegan = () => setOpenVegan(true);
  const handleCloseVegan = () => setOpenVegan(false);
  return (
    <div className='wrapper-diet'>
       <img
        className="smalllogoBits"
        src="https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg"
      ></img>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Veg Diet Plan
          </Typography>
          <VegAudioPlayer />          
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Breakfast:
            <br />
            Soaked almonds * 5
            <br />
            Milk * 300mL
            <br />
            Soaked moong * 80 gms
            <br />
            Poha * 1/2 cup
            <br />
            <br />
            <br />
            Lunch:
            <br />
            Chapati * 2
            <br />
            Rice * 1 cup
            <br />
            Paneer * 50 gms
            <br />
            Dal * 1 cup
            <br />
            Curd * 1 cup
            <br />
            <br />
            Dinner:
            <br />
            Salad * 100gms
            <br />
            Chapati * 1
            <br />
            Dal * 1 cup
            <br />
            Green vegetable * 100 gms
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={openNonVeg}
        onClose={handleCloseNonVeg}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Non Veg Diet Plan
          </Typography>
          <NonVegAudio />
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Breakfast:
            <br />
            Whole eggs * 2
            <br />
            Egg whites * 2
            <br />
            Milk * 300 ml
            <br />
            Bread * 2 slices
            <br />
            <br />
            Lunch:
            <br />
            Chicken breast * 100 gms
            <br />
            Brown Rice * 1 cup
            <br />
            Dal * 1 cup
            <br />
            Curd * 1 cup
            <br />
            <br />
            Dinner:
            <br />
            Fish * 50 gms
            <br />
            Salad * 100 gms
            <br />
            Green veggies * 100 gms
            <br />
            Chapati * 2
            <br />
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={openVegan}
        onClose={handleCloseVegan}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Vegan Diet Plan
          </Typography>
          <VeganAudio />
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Breakfast:
            <br />
            Soaked almonds * 5
            <br />
            Soya Milk * 300mL
            <br />
            Soaked moong * 80 gms
            <br />
            Poha * 1/2 cup
            <br />
            <br />
            Lunch:
            <br />
            Chapati * 2
            <br />
            Rice * 1 cup
            <br />
            Soya chunks * 50 gms
            <br />
            Dal * 1 cup
            <br />
            Tomato salad * 1 cup
            <br />
            <br />
            Dinner:
            <br />
            Salad * 100gms
            <br />
            Chapati * 1
            <br />
            Dal * 1 cup
            <br />
            Green vegetable * 100 gms
            <br />
            Tofu - 50 gms
          </Typography>
        </Box>
      </Modal>
      <Button
        style={{ marginBottom: '2%' }}
        onClick={handleOpen}
        variant='contained'
        color='success'
      >
        Vegetarian
      </Button>{' '}
      <Button
        style={{ marginBottom: '2%' }}
        onClick={handleOpenNonVag}
        variant='contained'
        color='success'
      >
        Non - Vegetarian
      </Button>{' '}
      <Button
        style={{ marginBottom: '2%' }}
        onClick={handleOpenVegan}
        variant='contained'
        color='success'
      >
        Vegan
      </Button>
    </div>
  );
};

export default Diet;
