import * as React from 'react';
import '../App.css';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";





function NavButtonsLoginSignup() {

    const navigate = useNavigate();

    function onSignUp() {
        navigate(process.env.PUBLIC_URL + "/signup");
    }

    function onLogin() {


        navigate(process.env.PUBLIC_URL + "/Homepage");
    }

    return (
        <div className='frontpageButtons mar-5'>
            <Button variant="contained" onClick={onLogin} className='mar-5'>Login</Button>
            <Button variant="outlined" onClick={onSignUp} className='mar-5'>Sign up</Button>
        </div>
    );
}

export default NavButtonsLoginSignup;