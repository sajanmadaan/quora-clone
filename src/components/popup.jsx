
import Modal from '@mui/material/Modal';

import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Button from '@mui/material/Button';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import Stack from '@mui/material/Stack';
import "./CSS/popup.css"

import {Ques} from "./ques_pop";
import {Post} from "./post_pop";
import { useState } from 'react';
import { StyledEngineProvider } from '@mui/material';
import { Showques } from './show_ques';

export const BasicModal = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [show, setShow] = useState(true);
  return (
    <div>
      <button className="btn"onClick={() => {
          setOpen(true)
      }}>Add Questions</button> 

      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         
        <div id="popdiv">
            <IconButton onClick={() => {
                setOpen(false)
            }} id='close_btn' aria-label="Close" size="large">
        <CloseRoundedIcon fontSize='large' />
             </IconButton>

             <Stack direction="row" spacing={0}>
      <Button  onClick={
          () => {
              setShow(true)
          }
      }    sx={{
        borderBottom: 2,
       
        color: show ? 'primary' : 'grey.500',
      }}
      className='two_btns' variant="text"  size="large" startIcon={<LiveHelpRoundedIcon />}>
      Add Question
      </Button>
      <Button onClick={
          () => {
              setShow(false)
          }
      } sx={{
        borderBottom: 2,
        color: show ? 'grey.500' : 'primary',
      }}
      className='two_btns' variant="text" size="large" startIcon={<ModeEditRoundedIcon />}>
      Create Post
      </Button>
    </Stack>

    {
        show ? <Ques close={handleClose}/> : <Post  close={handleClose}/>
    }
       </div>
  
     
      </Modal>
    </div>
  );
}
