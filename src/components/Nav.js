import * as React from 'react';
import '../App.css';
import { Button } from '@mui/material';
import { BrowserRouter, Route, Link, useNavigate } from "react-router-dom";





function NavButtonsLoginSignup() {

    const navigate = useNavigate();
    function change() {
        navigate(process.env.PUBLIC_URL + "/signup")

    }
    function homenavigate() {

        //if and esle to validate should be out here
        navigate(process.env.PUBLIC_URL + "/Homepage")

    }

    return (
        <div className='frontpageButtons mar-5'>
            <Button variant="contained" onClick={homenavigate} className='mar-5'> Login</Button>
            <Button variant="outlined" onClick={change} className='mar-5'>Sign up</Button>
        </div>
    );
}

export default NavButtonsLoginSignup;