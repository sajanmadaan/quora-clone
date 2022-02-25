import { useSelector } from "react-redux";
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import EditOffRoundedIcon from '@mui/icons-material/EditOffRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { Button, IconButton ,Stack} from "@mui/material";

export const Show_ques = () => {
const ques = useSelector( (store) => store.ques);

    return (
     <div style={{border: "1px solid black", width: "400px", margin: "auto"}}>
         <p>You recently asked</p>
         <h4>{ques}</h4>
         <div>
         {/* <Stack direction="row" spacing={2}> */}
      <Button variant="text" sx={{ 
           borderRadius: '20px',
       borderColor: 'text.primary' }} startIcon={<RssFeedRoundedIcon />}>
        Follow
      </Button>

      <Button variant="text" sx={{ 
           borderRadius: '20px',
       color: 'grey.500' }} startIcon={<EditOffRoundedIcon />}>
        Pass
      </Button>
      
      <IconButton aria-label="more" sx={{float: "right"}}>
  <MoreHorizRoundedIcon />
</IconButton>

{/* </Stack> */}
         </div>
     </div>
    );
}