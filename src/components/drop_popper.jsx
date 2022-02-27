import { useState } from 'react';
import {Box,Popper, Button, } from '@mui/material';
import "./CSS/ans_poppper.css";
import {local_store, local_get} from "../utils/localstorage";
import axios from 'axios';
import { recent_answers } from '../redux/ans_redux/action';
import {useDispatch, useSelector} from "react-redux"

export const SimplePopper = ({index}) => {
   
 const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] =  useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const[text, setText] = useState("");

  return (
    <div className='answerPop'>
      <button aria-describedby={id} type="button" onClick={handleClick} >
        Answer
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl} placement={'bottom-end'} >
        <Box sx={{ width:"300px" , display:"flex" ,gap:"5px" }} className="box2" >
          {/* The content of the Popper. */}
         <textarea onChange={(e) => {
             setText(e.target.value)
         }} ></textarea>
                 <Button  sx={{
    borderRadius: '20px',
    color: 'grey.main',
  }}variant="contained"  onClick={() =>{
      axios.post("https://quora-clone-api-masai.herokuapp.com/answer", {
          user_id: "6215f3aebde7e7e555f3eb0b",
          ques_id: "62161389678142638c8966bc",
          ans_dec: text
      }).then( (res) => {console.log(res.data); dispatch(recent_answers(text, index))} );
     let temp = local_get("answers") || [];
     temp[index] = text;
    local_store( "answers" ,temp)
    handleClick()
  }} 
   >ADD</Button>
          <div className='text_div'>     
  
      </div>
        </Box>
      </Popper>
    </div>
  );
}