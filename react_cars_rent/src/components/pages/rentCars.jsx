import { Fragment } from "react";
import { Container } from "./aPagesStyles";
import {useNavigate} from "react-router-dom"



function RentaCars ()  {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate ("/")
    }

    return (
        <Fragment>
            <Container estilo={"Renta"}>

                     <button onClick={handleClick}> Log out </button> 

                    Rent Cars           
                    <h2>Contacto del RentaCArs</h2>     
            </Container>
           

        </Fragment>
    )
};

export default RentaCars;