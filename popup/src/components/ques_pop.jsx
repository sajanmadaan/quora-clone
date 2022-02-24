import "../styles/popup.css";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
const ariaLabel = { 'aria-label': 'description' };

export const Ques = () => {

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
            <IconButton aria-label="redirect to profile" disabled color="primary" size="small">
             <AccountCircleRoundedIcon color="primary"/>
           </IconButton>

           <Button  sx={{
    borderRadius: '20px',
    color: 'grey.500',
  }} variant="outlined" startIcon={<PeopleAltRoundedIcon/>}>
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
      <Input fullWidth  placeholder="Start your question with What, How, Why, etc." inputProps={ariaLabel} />
    </Box>
    </div>
      <div className="bottom_div">
          <hr></hr>
          <Button  sx={{
    borderRadius: '20px',
    color: 'grey.500',
  }} variant="text">Cancel</Button>
          <Button  sx={{
    borderRadius: '20px',

  }}variant="contained">Add Question</Button>
      </div>
        </div>
    );
}