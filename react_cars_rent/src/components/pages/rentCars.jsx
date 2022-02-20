import { Fragment } from "react";
import { ContainerRent } from "./aPagesStyles";
import {useAuth} from "../context/authContext";
import CarCard from "../CardsRent/cardsRent";
import NavBar from "../navBar/navBar";


function RentaCars ()  {
    const {usuario, loading } = useAuth();
    
       if (loading) { <h1>LOADING...</h1>}

    return (
        <Fragment>
             <NavBar /> 
             <ContainerRent>

                <ContainerRent estilo={"Profile"}>
                    {usuario != null  && <p>Welcome  | { usuario.displayName ||usuario.email }</p> }
                </ContainerRent>

                <ContainerRent estilo={"Head"}>
                    <h3> Choose your car preference and  book it! </h3>          
                </ContainerRent>

                <ContainerRent estilo={"RentaCars"}>
                    <CarCard />
                </ContainerRent>

             </ContainerRent>
        </Fragment>
    )
};

export default RentaCars;