import "./button.css"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../context/authContext';

import { Fragment } from "react";

function BtnLogout () {
    const navigate = useNavigate();
    const {usuario, logout} = useAuth();
    
    const  handleLogout = async (e) => {
        e.preventDefault();
        try {
            await logout();   
            navigate ("/");
            alert("el usuario ha salido " + usuario.email)
        } catch (error) {
            console.log("Failed Logout" + error.message)

        }
    }    
    return(
        <Fragment>
            <Link to="/ ">
                <button  onClick={handleLogout} className="btn">Logout</button> 
            </Link>
        </Fragment>
    )
};

export default BtnLogout;