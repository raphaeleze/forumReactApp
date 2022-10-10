import * as React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { notify } from '../utils.js';

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

    if (validInputs()) {

      const userData = { "email": values.email, "password": values.password };

      const requestOptions = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      };

      const URL = process.env.REACT_APP_API_URL
      let callStatus = 200;
      let msg = '', status;

      axios.post(`${URL}/users/login`, userData)
        .then((data) => {

          msg = data.data.msg ? data.data.msg : data.status === 200 ? "Login succesfull" : "Something went worng";

          status = callStatus !== 400 ? toast.TYPE.SUCCESS : toast.TYPE.ERROR;

          notify(msg, status);
          navigate(process.env.PUBLIC_URL + "/Homepage");
        })
        .catch((err) => {
          msg = err.message ? err.message : "Something went wrong";
          if (err.response.data.msg) {
            msg = err.response.data.msg;
          }
          notify(msg, toast.TYPE.ERROR);
        });
    } else {
      notify("Check your inputs!", "error");
    }
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

  function validInputs() {
    let veredict = true;

    if (!values.email || !isEmail(values.email)) {
      veredict = false;
      values.emailError = true;
    } else {
      values.emailError = false;
    }

    if (!values.password) {
      veredict = false;
      values.passwordError = true;
    }

    return veredict;
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className='mar-5 width50 disp-block '>
      <h4>Login form</h4>
      <Box component="form" noValidate autoComplete="off" className='disp-block mar-5'>
        <div>
          <TextField label="Email Address" type="email" variant="outlined" fullWidth
            className='mar-5' value={values.email} onChange={handleChange('email')} error={values.emailError} />
          {/* <TextField label="Password" type="password" variant="outlined" fullWidth
            className='mar-5' value={values.password} onChange={handleChange('password')} error={values.passwordError} /> */}
          <FormControl variant="outlined" className='mar-5' fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput fullWidth
              id="password"
              label="Password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              error={values.passwordError}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end" >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              } />
          </FormControl>
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
