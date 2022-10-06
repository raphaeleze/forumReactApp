import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { BrowserRouter, Route, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


export default function Signup() {

  const navigate = useNavigate();

  // const [userName, setUserName] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  // const [confirmPassword, setConfirmPassword] = useState(null);

  function navBack() {
    navigate(process.env.PUBLIC_URL + "/")
  }

  function createUser() {
    //process.env.REACT_APP_API_URL
  }

  function clearForm() {
    //process.env.REACT_APP_API_URL
    setValues({
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPasswordConfirm: false,
      showPassword: false
    });
  }

  /*
  *************************************
  For password visibility
  *************************************
  */

  const [values, setValues] = React.useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPasswordConfirm: false,
    showPassword: false
  });

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

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { padding: "50px 20px", width: 300, margin: "20px auto" },
        }} noValidate autoComplete="off" >

        <div>
          <h4>Registration form</h4>
          <TextField label="Userame" variant="outlined" fullWidth className='mar-5' value={values.userName} onChange={handleChange('userName')} />
          <TextField label="Email Address" variant="outlined" fullWidth className='mar-5' value={values.email} onChange={handleChange('email')} />
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
