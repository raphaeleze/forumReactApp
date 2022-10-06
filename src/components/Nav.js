import * as React from 'react';

import { Button } from '@mui/material';
import { BrowserRouter, Route, Link, useNavigate } from "react-router-dom";





function NavButtonsLoginSignup() {

    const navigate = useNavigate();
    function change(){
        navigate(process.env.PUBLIC_URL+"/signup")

    }
    function homenavigate(){

        //if and esle to validate should be out here
        navigate(process.env.PUBLIC_URL+"/Homepage")

    }

    return (
        <div className='frontpageButtons'>
        
        <Button color="secondary" onClick={homenavigate}> Login</Button>
        <Button color="secondary" onClick={change}>sign up</Button>
        
        </div>
    );
  }
  
  export default NavButtonsLoginSignup;