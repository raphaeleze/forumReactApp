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


export default function Signup() {

  const navigate = useNavigate();

  const initValues = {
    userName: '',
    userNameError: false,
    email: '',
    emailError: false,
    password: '',
    confirmPassword: '',
    showPasswordConfirm: false,
    showPassword: false
  };

  const [values, setValues] = useState(JSON.parse(JSON.stringify(initValues)));


  function navBack() {
    navigate(process.env.PUBLIC_URL + "/")
  }

  const notify = (text, type, duration = 5000) => {

    const options = {
      autoClose: duration,
      type: type //toast.TYPE.INFO
    }
    toast(text, options);
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
          /*.then(err => {
            if (err.status == 400) {
              callStatus = err.status
            }
          })*/
          .then(response => response.json())
          .then(data => {
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

    if (!values.email /*|| !isEmail(values.email)*/) {
      veredict = false;
      values.emailError = true;
    }

    if (!values.userName) {
      veredict = false;
      values.userNameError = true;
    }

    if (!values.password) {
      veredict = false;
    }

    if (!values.confirmPassword) {
      veredict = false;
    }

    if (values.password !== values.confirmPassword) {
      veredict = false;
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
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { padding: "50px 20px", width: 300, margin: "20px auto" },
        }} noValidate autoComplete="off" >

        <div>
          <h4>Registration form</h4>
          <TextField label="Username" variant="outlined" fullWidth className='mar-5' value={values.userName} onChange={handleChange('userName')} error={values.userNameError} />
          <TextField label="Email Address" variant="outlined" fullWidth className='mar-5' value={values.email} onChange={handleChange('email')} error={values.emailError} />
          {/* <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth className='mar-5' value="{password}" type="password" />
          <TextField id="outlined-basic" label="Confim Password" variant="outlined" fullWidth className='mar-5' value="{confirmPassword}" type="password" /> */}
          <FormControl variant="outlined" className='mar-5' fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput fullWidth
              id="password"
              label="Password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
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
              }
            />
          </FormControl>
          <FormControl variant="outlined" className='mar-5' fullWidth>
            <InputLabel htmlFor="confirm-password">Confirm password</InputLabel>
            <OutlinedInput fullWidth
              id="confirm-password"
              label="Confirm password"
              type={values.showPasswordConfirm ? 'text' : 'password'}
              value={values.confirmPassword}
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
              }
            />
          </FormControl>
        </div>
        <div className='frontpageButtons'>
          <Button variant="contained" onClick={createUser}>Sign up</Button>
          <Button variant="outlined" onClick={navBack} className='mar-5'>Go back</Button>
        </div>
        <Button onClick={clearForm} className='mar-5'>Clear form</Button>
      </Box>
    </div>
  );
}
