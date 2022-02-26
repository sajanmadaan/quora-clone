import { useSelector } from "react-redux";
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import EditOffRoundedIcon from '@mui/icons-material/EditOffRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { Button, IconButton ,Stack} from "@mui/material";
import "./CSS/showques.css"
export const Showques = () => {
const ques = useSelector( (store) => store.reducer.ques);

    return (
     <div className="btn3">
         <p>You recently asked</p>
         <h3>{ques}</h3>
         <div>
         {/* <Stack direction="row" spacing={2}> */}
      <Button variant="text" sx={{ 
           borderRadius: '20px',
       borderColor: 'text.primary' }} startIcon={<RssFeedRoundedIcon />}>
        Follow
      </Button>

      <Button variant="text" sx={{ 
           borderRadius: '20px',
       color: 'grey.500',}} startIcon={<EditOffRoundedIcon />}>
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