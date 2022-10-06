import * as React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from '@mui/material';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ButtonAppBar from './Appbar';
import NavButtonsLoginSignup from './Nav';

export default function Login() {

  return (
    <div className='mar-5'>
      <h4>Login form</h4>
      <Box component="form"
        // sx={{
        //   '& > :not(style)': { padding: "50px 20px", width: 300, margin: "20px auto" },
        // }}
        noValidate autoComplete="off" className='disp-block mar-5'>

        <div>
          <TextField label="Email Address" variant="outlined" fullWidth className='mar-5' />
          <TextField label="Password" variant="outlined" fullWidth className='mar-5' />
        </div>
        <NavButtonsLoginSignup></NavButtonsLoginSignup>

      </Box>
    </div>
  );
}
