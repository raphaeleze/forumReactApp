import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from '@mui/material';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ButtonAppBar from './Appbar';
import NavButtonsLoginSignup from './Nav';

export default function Login() {
//         <Link to ="components/signup"> ignup</Link>

//     const [name, setName] = useState('')
//     const [address, setAddress] = useState('')

//     const handleClick = (e)=>{
//         e.preventDefault()
//         const user = {name, address}
//         console.log (user)
//         fetch("http://localhost:8080/forum/users/add",{
//         method:"POST",
//         headers: {"Content-Type":"application/json"},
//         body:JSON.stringify(user)

//     }).then(()=>{
//         console.log("new user adde)")
//     })
// }




  return (
    
    <Box
    
      component="form"
      sx={{
        '& > :not(style)': { padding:"50px 20px" , width:300,margin:"20px auto" },
      }}
      noValidate
      autoComplete="off"
      
    >

      {/* <TextField id="outlined-basic" label="Email Address" variant="outlined" fullWidth
      value={address}onChange={(e) =>setAddress(e.target.value)}/>
      <TextField id="outlined-basic" label="" variant="outlined" fullWidth  
      value={name}onChange={(e) =>setName(e.target.value)}/> */}


      <TextField id="outlined-basic" label="Email Address" variant="outlined" fullWidth
     />
      <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth  
      />
      <NavButtonsLoginSignup></NavButtonsLoginSignup>


    </Box>
  );
}
