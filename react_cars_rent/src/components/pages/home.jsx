import  { Fragment } from "react";
import {Container, Boton} from "./aPagesStyles";
import NavBarHome from "../navBar/navBarHome";
import {useNavigate} from "react-router-dom";
import BtnBookCar from "../loginSignIp/BotonBookHome";


function Home () {


    return(
        <Fragment>
                <NavBarHome />

                <Container>
                    Home
    
                </Container>
                <Container estilo={"Renta"} >
                    <h3>Rent Cars </h3>    
                    <BtnBookCar />
                      
                </Container>
          
        </Fragment>
    )
};

export default Home;




                     
