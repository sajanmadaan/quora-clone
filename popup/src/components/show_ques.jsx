import { useSelector } from "react-redux";
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';

import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";

export const Show_ques = () => {
const ques = useSelector( (store) => store.ques);

    return (
     <div>
         <p>You recently asked</p>
         <h4>{ques}</h4>
         <div>
        
      <Button variant="text" sx={{ 
       borderColor: 'text.primary' }} startIcon={<RssFeedRoundedIcon />}>
        Follow
      </Button>


         </div>
     </div>
    );
}