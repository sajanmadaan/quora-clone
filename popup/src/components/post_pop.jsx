import "../styles/popup.css";
import {Stack, IconButton , Button, Input } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import { useState,useEffect } from "react";
import {local_store, local_get} from "../utils/localstorage";


export const Post = ({close}) => {
  const [image, setImage]= useState(null);
  const [imageurl, setUrl] = useState("");
  const [text, setText] = useState("");
  useEffect( () => {
    if(image){

      setUrl(URL.createObjectURL(image))
    }
    
  }, [image]);

  console.log(image);
  
    return (
        <div>
          <div className="profile_input">
          <Stack direction="row" spacing={2}>
            <IconButton aria-label="redirect to profile" color="primary" size="small">
             <AccountCircleRoundedIcon color="primary"/>
           </IconButton>

           <Button  sx={{
    borderRadius: '20px',
    color: 'grey.500',
    borderColor: 'grey.500',
  }} variant="outlined" startIcon={<LanguageRoundedIcon/>} endIcon={<KeyboardArrowDownRoundedIcon />}>
        Everyone
      </Button>
      </Stack>
          </div>
       <div className="post_show_div" >
           <textarea placeholder="Say something" onChange={
             (e) => {
               setText(e.target.value);
             }
           } ></textarea>
           {image && (<img src={imageurl} alt="" />)}
          
       </div>

          <div className="bottom_div">
          <hr></hr>         
          <input type="file"  accept="image/*" onChange={(e) => {
            // console.log(e.target.files[0]);
            setImage(e.target.files[0]);
           
          }} />
          <Button  sx={{
    borderRadius: '20px',
    color: 'grey.main',
  }}variant="contained" onClick={
    () => {
      let temp = local_get("My_posts") || [];
     temp = [...temp, {post_dec: text, image_url: imageurl }]
     local_store("My_posts", temp);
     close();
    }
  }>Post</Button>
      </div>
        </div>
    );
}