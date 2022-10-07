import * as React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from '@mui/material';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ButtonAppBar from './Appbar';
import NavButtonsLoginSignup from './Nav';
import { useNavigate } from "react-router-dom";

export default function Login() {

  const initValues = {
    email: '',
    emailError: false,
    password: '',
    passwordError: false,
    showPassword: false
  };

  // const [values, setValues] = useState(JSON.parse(JSON.stringify(initValues)));
  const [values, setValues] = useState(initValues);

  const navigate = useNavigate();

  function onSignUp() {
    navigate(process.env.PUBLIC_URL + "/signup");
  }

  function onLogin() {
    navigate(process.env.PUBLIC_URL + "/Homepage");
  }

  const handleChange = (prop) => (event) => {

    switch (prop) {
      case "email":
        if (isEmail(event.target.value)) {
          values.emailError = false;
        } else {
          values.emailError = true;
        }
        break;

      case "password":
        if (event.target.value) {
          values.passwordError = false;
        } else {
          values.passwordError = true;
        }
        break;
    }

    setValues({ ...values, [prop]: event.target.value });
  };

  function isEmail(val) {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(val)) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className='mar-5 width50 disp-block '>
      <h4>Login form</h4>
      <Box component="form" noValidate autoComplete="off" className='disp-block mar-5'>
        <div>
          <TextField label="Email Address" type="email" variant="outlined" fullWidth
            className='mar-5' value={values.email} onChange={handleChange('email')} error={values.emailError} />
          <TextField label="Password" type="password" variant="outlined" fullWidth
            className='mar-5' value={values.password} onChange={handleChange('password')} error={values.passwordError} />
        </div>
        <div className='frontpageButtons mar-5'>
          <Button variant="contained" onClick={onLogin} className='mar-5'>Login</Button>
          <Button variant="outlined" onClick={onSignUp} className='mar-5'>Sign up</Button>
        </div>
        {/* <NavButtonsLoginSignup></NavButtonsLoginSignup> */}
      </Box>
    </div>
  );
}
