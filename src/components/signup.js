import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { BrowserRouter, Route, Link, useNavigate } from "react-router-dom";


export default function Signup() {
    

  const navigate = useNavigate();
  function change(){

    //if else to validate sign up should be added here
      navigate(process.env.PUBLIC_URL+"/")
  }


  return (
    <Box
    
      component="form"
      sx={{
        '& > :not(style)': { padding:"50px 20px" , width:300,margin:"20px auto" },
      }}
      noValidate
      autoComplete="off"
      
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth/>
      <TextField id="outlined-basic" label="Email Address" variant="outlined" fullWidth
      />
        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth
      />
            <TextField id="outlined-basic" label="Confim Password" variant="outlined" fullWidth
      />
      <div className='frontpageButtons'>
            <Button color="secondary"onClick={change}>sign up</Button>
      </div>




    </Box>
  );
}
