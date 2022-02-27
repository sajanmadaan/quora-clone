import { useState } from 'react';
import {Box,Popper, Button, } from '@mui/material';
import "../styles/ans_poppper.css";
import {local_store, local_get} from "../utils/localstorage";
import axios from 'axios';
import { recent_answers } from '../redux/ans_redux/action';
import {useDispatch, useSelector} from "react-redux"

export const SimplePopper = () => {
   
 const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] =  useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const[text, setText] = useState("");

  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1,  width:"400px",  p: 1, bgcolor: 'background.paper' }} className="box" >
          {/* The content of the Popper. */}
         <textarea onChange={(e) => {
             setText(e.target.value)
         }} ></textarea>
         
          <div className='text_div'>
          <hr></hr>         
          <Button  sx={{
    borderRadius: '20px',
    color: 'grey.main',
  }}variant="contained"  onClick={() =>{
      axios.post("https://quora-clone-api-masai.herokuapp.com/answer", {
          user_id: "6215f3aebde7e7e555f3eb0b",
          ques_id: "62161389678142638c8966bc",
          ans_dec: text
      }).then( (res) => {console.log(res.data); dispatch(recent_answers(text, 1))} );
     let temp = local_get("answers") || [];
     temp[1] = text;
    local_store( "answers" ,temp)
    handleClick()
  }} 
   >Post</Button>
      </div>
        </Box>
      </Popper>
    </div>
  );
}