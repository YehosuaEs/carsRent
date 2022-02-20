import { Fragment } from "react";
import { Container } from "./aPagesStyles";
import NavBarHome from "../navBar/navBarHome";
import BtnBookCar from "../loginSignIp/BotonBookHome";
import CarsHome from "../../img/CarsHome.png"
import styledComponents from "styled-components";

export const Imagen = styledComponents.img`
    width: 50%;
    height: 50%;
`;

function Home () {

    return(
        <Fragment>
            {/* -------------- NAV BAR HOME -------------- */}
                <NavBarHome />
            {/* -------------- CONTAINER RESTANTE --------- */}
                <Container>
                    <Imagen src={CarsHome}></Imagen>
                </Container>

                <Container estilo={"Renta"} >
                    <h3>Rent Cars </h3>   
                   
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    <h5> Donec eu elit tortor. Nunc tempus viverra sollicitudin. Donec feugiat mauris id ligula interdum, non sagittis ligula pretium.</h5> 
                    <BtnBookCar />
                </Container>
               
          
        </Fragment>
    )
};

export default Home;




                     
