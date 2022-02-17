import {Fragment, useState} from "react";
import  {Botones, CardDescription} from "./carsRentStyles"
import { DescripUl, DescripLi, FeatAndGuide} from "./botonDescriptionStyle"


function BotonDescription(props) {

    const [pressDescripcion, setPressDescripcion] = useState(false)
    const handleclickDetails = (e) => {
        e.preventDefault();
        setPressDescripcion(!pressDescripcion)
    };


    return (
        <Fragment>
            <Botones estilo={"BotonDetails"} type="button" onClick={handleclickDetails}>Details </Botones>
            <CardDescription display={pressDescripcion ? 'block' : 'none'}>
                
                <DescripUl>
                    <DescripLi>Seats:  {props.asientos}</DescripLi>
                    <DescripLi>Passengers: {props.pasajeros}</DescripLi>
                    <DescripLi>Doors: {props.puertas}</DescripLi>
                </DescripUl>

                <DescripUl>
                    <DescripLi estilo={'descriptionDown'}>Category: {props.categoria}</DescripLi>
                    <DescripLi estilo={'descriptionDown'}>Transmission: {props.transmision}</DescripLi>
                </DescripUl> 
                <FeatAndGuide>Features</FeatAndGuide>
                <hr />
                <FeatAndGuide>Guidelines</FeatAndGuide>
                <hr />

            </CardDescription> 
        </Fragment>
    )

};

export default BotonDescription;