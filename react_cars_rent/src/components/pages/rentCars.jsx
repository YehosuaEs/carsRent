import { Fragment, useState } from "react";
import { Container } from "./aPagesStyles";
import {useNavigate} from "react-router-dom"
import {useAuth} from "../context/authContext"


function RentaCars ()  {
    const navigate = useNavigate();
    const {usuario, logout, loading } = useAuth();

    console.log( usuario)
    
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
       if (loading) { <h1>LOADING...</h1>}

    return (
        <Fragment>
            <Container estilo={"Renta"}>
                {usuario != null  && 
                    <> 
                        <p>Welcome { usuario.displayName ||usuario.email }</p>  
                     
                        <button onClick={handleLogout}> Log out </button> 
                    </>
                }

                <h1>Rent Cars  </h1>          
                <h2>Contacto del RentaCArs</h2>   
                    
            </Container>
           

        </Fragment>
    )
};

export default RentaCars;