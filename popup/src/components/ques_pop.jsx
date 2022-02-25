import "../styles/popup.css";
import AccountCircleRoundedIcon  from '@mui/icons-material/AccountCircleRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import {IconButton, Button,Stack , Box ,Input} from '@mui/material';

import { useState } from "react";
import axios from "axios";
import {  useDispatch } from "react-redux";
import { recent_ques } from "../redux/ques_redux/action";
import {local_store} from "../utils/localstorage";
const ariaLabel = { 'aria-label': 'description' };


export const Ques = ({close}) => {
  const dispatch = useDispatch();
const [text, setText] = useState("");
const addQues = (data) => {
  axios.post("https://quora-clone-api-masai.herokuapp.com/question",data )
  .then( (res) => {console.log(res.data); dispatch(recent_ques(res.data.ques_dec)) })
  .catch( (err) => {console.log(err)})
}
    return (
        <div>
            <div className="blue_div">
                <h4>Tips on getting good answers quickly</h4>
                <ul>
                    <li>Make sure your question has not been asked already</li>
                    <li>Keep your question short and to the point</li>
                    <li>Double-check grammar and spelling</li>
                </ul>
            </div>

            <div className="profile_input">
            <Stack direction="row" spacing={2}>
            <IconButton aria-label="redirect to profile"  color="primary" size="small">
             <AccountCircleRoundedIcon color="primary"/>
           </IconButton>

           <Button  sx={{
    borderRadius: '20px',
    color: 'grey.500',
    borderColor: 'grey.500',
  }} variant="outlined" startIcon={<PeopleAltRoundedIcon/>} endIcon={<KeyboardArrowDownRoundedIcon />}>
        Public
      </Button>
      </Stack>
      
      <br />
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Input fullWidth onChange={
        (e) => {
          setText(e.target.value)
        }
      } placeholder="Start your question with What, How, Why, etc." inputProps={ariaLabel} />
    </Box>
    </div>
      <div className="bottom_div">
          <hr></hr>
          <Button  sx={{
    borderRadius: '20px',
    color: 'grey.500',
  }} variant="text" onClick={
    () => {
      close();
    }
  } >Cancel</Button>

          <Button  sx={{
    borderRadius: '20px',

  }}  onClick= {
    () => {
      addQues({
        user_id:"6215e624868e57aeb11983d3",
        ques_dec: text
      });
     local_store("recent_ques" ,text);
      close();
    }
  } variant="contained">Add Question</Button>
      </div>
        </div>
    );
}