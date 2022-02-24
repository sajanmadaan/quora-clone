import "../styles/popup.css";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Button from '@mui/material/Button';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

export const Post = () => {
    return (
        <div>
          <div className="profile_input">
          <Stack direction="row" spacing={2}>
            <IconButton aria-label="redirect to profile" disabled color="primary" size="small">
             <AccountCircleRoundedIcon color="primary"/>
           </IconButton>

           <Button  sx={{
    borderRadius: '20px',
    color: 'grey.500',
  }} variant="outlined" startIcon={<LanguageRoundedIcon/>}>
        Everyone
      </Button>
      </Stack>
          </div>
       <div className="post_show_div" >
           <textarea></textarea>
          
       </div>

          <div className="bottom_div">
          <hr></hr>     
          <Button  sx={{
    borderRadius: '20px',
    color: 'grey.main',
  }}variant="contained">Post</Button>
      </div>
        </div>
    );
}