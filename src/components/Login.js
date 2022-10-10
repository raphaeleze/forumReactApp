import * as React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

      fetch(`${URL}/users/login`, requestOptions)
        .then(response => {
          console.log(response)
          if (response.status == 400) { //For catching error
            callStatus = response.status;
            throw response.json()
          } else {
            return response.json()
          }
        }).then(data => {
          let msg = '';

          if (data.msg) {
            msg = data.msg;
          }

          let status = callStatus !== 400 ? "success" : "error";

          //process.env.REACT_APP_LOGIN_TOKEN = true;
          notify(msg, status);
          navigate(process.env.PUBLIC_URL + "/Homepage");

        })
        .catch(err => {
          notify("Something went wrong", "error");
          console.log(err)
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
