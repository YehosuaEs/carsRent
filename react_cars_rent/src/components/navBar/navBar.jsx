import { Fragment } from 'react';
import {useNavigate} from "react-router-dom"


function NavBar () {
    const navigate = useNavigate();

    const handleClickLogin = (e) => {
        e.preventDefault();
        navigate ("/login")
    };

    const handleClickSignup = (e) => {
        e.preventDefault();
        navigate ("/signup")
    };



    return(
        <Fragment>
              <button onClick={handleClickLogin}> Login </button> 
              <button onClick={handleClickSignup}> Signup </button> 

        </Fragment>

    )
};

export default NavBar;