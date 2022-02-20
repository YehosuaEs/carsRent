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
                     {/* <h3>home </h3>   */}
                    <Imagen src={CarsHome}></Imagen>
                </Container>

                <Container estilo={"Renta"} >
                    <h3>Rent Cars </h3>   
                   
                    <h5>CAR SHARING EN RIVIERA MAYA ALQUILER DE COCHES POR DÍAS PARA DISFRUTAR DE TUS VACACIONES</h5> 
                    <BtnBookCar />
                </Container>
               
          
        </Fragment>
    )
};

export default Home;




                     
