import { Fragment, useState } from "react";
import { Container } from "./aPagesStyles";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/authContext";
import CarCard from "../CardsRent/cardsRent";


function RentaCars ()  {
    const navigate = useNavigate();
    const {usuario, logout, loading } = useAuth();
    
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
                <CarCard />

               
                    
            </Container>
        </Fragment>
    )
};

export default RentaCars;