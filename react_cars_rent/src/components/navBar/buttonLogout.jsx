import "./button.css"
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../context/authContext';


function BtnLogout () {
    const navigate = useNavigate();
    const {usuario, logout} = useAuth();
    
    const  handleLogout = async (e) => {
        e.preventDefault();
        try {
            await logout();   
            navigate ("/");
            console.log("el usuario ha salido " + usuario.email)
        } catch (error) {
            console.log("Failed Logout" + error.message)

        }
    }    
    return(
        <Fragment>
            <Link to="/ ">
                <button  onClick={handleLogout} className="btnLogout">Logout</button> 
            </Link>
        </Fragment>
    )
};

export default BtnLogout;