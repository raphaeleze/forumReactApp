import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../utils.js';


export default function Signup() {

  const navigate = useNavigate();

  const initValues = {
    userName: '',
    userNameError: false,
    email: '',
    emailError: false,
    password: '',
    confirmPassword: '',
    passwordError: false,
    showPasswordConfirm: false,
    showPassword: false
  };

  const [values, setValues] = useState(initValues);


  function navBack() {
    navigate(process.env.PUBLIC_URL + "/")
  }

  /**
   * Calls the API from creating the user
   */
  function createUser() {

    if (validInputs()) {
      const userData = { "email": values.email, "username": values.userName, "password": values.password };

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      };

      const URL = process.env.REACT_APP_API_URL
      let callStatus = 200;

      try {
        fetch(`${URL}/users/add`, requestOptions)
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

            notify(msg, status);

            navBack();
          })
          .catch(err => {
            notify("Something went wrong", "error");
            console.log(err)
          });

      } catch (err) {
        notify("Something went wrong", "error");
      }
    } else {
      notify("Check your inputs!", "error");
    }

  }

  /**
   * Verifies if the user inputs are valid
   */
  function validInputs() {
    let veredict = true;

    if (!values.email || !isEmail(values.email)) {
      veredict = false;
      values.emailError = true;
    } else {
      values.emailError = false;
    }

    if (!values.userName) {
      veredict = false;
      values.userNameError = true;
    } else {
      values.userNameError = false;
    }

    if (!values.password) {
      veredict = false;
      values.passwordError = true;
    }

    if (!values.confirmPassword) {
      veredict = false;
      values.passwordError = true;
    }

    if (values.password !== values.confirmPassword) {
      veredict = false;
    } else {
      values.passwordError = false;
    }

    return veredict;
  }

  /**
   * Sets all the fields of the form to blank
   */
  function clearForm() {
    setValues(JSON.parse(JSON.stringify(initValues)));
  }


  const handleChange = (prop) => (event) => {

    validInputs()

    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showPasswordConfirm: !values.showPasswordConfirm,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
      <Box
        className='mar-5'
        component="form"
        noValidate autoComplete="off" >

        <div>
          <h4>Registration form</h4>
          <TextField label="Username" variant="outlined" fullWidth className='mar-5' value={values.userName} onChange={handleChange('userName')} error={values.userNameError} />
          <TextField label="Email Address" variant="outlined" fullWidth className='mar-5' value={values.email} onChange={handleChange('email')} error={values.emailError} />
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
          <FormControl variant="outlined" className='mar-5' fullWidth>
            <InputLabel htmlFor="confirm-password">Confirm password</InputLabel>
            <OutlinedInput fullWidth
              id="confirm-password"
              label="Confirm password"
              type={values.showPasswordConfirm ? 'text' : 'password'}
              value={values.confirmPassword}
              error={values.passwordError}
              onChange={handleChange('confirmPassword')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end" >
                    {values.showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              } />
          </FormControl>
        </div>
        <div className='frontpageButtons'>
          <Button variant="contained" onClick={createUser} className='mar-5'>Sign up</Button>
          <Button variant="outlined" onClick={navBack} className='mar-5'>Go back</Button>
        </div>
        <Button onClick={clearForm} className='mar-5'>Clear form</Button>
      </Box>
    </div>
  );
}
