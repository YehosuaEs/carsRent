import {Fragment, useState} from "react";
import  {Botones, CardDescription} from "./carsRentStyles"
import { DescripUl, DescripLi, FeatAndGuide, Icono, LineaDiv} from "./botonDescriptionStyle"
import seat from "../../img/iconosCars/seat.png"
import passengers from "../../img/iconosCars/passengers.png"
import door from "../../img/iconosCars/door.png"
import family from "../../img/iconosCars/family.png"
import manual from "../../img/iconosCars/manual.png"

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
                <FeatAndGuide>Characteristics</FeatAndGuide>
                <LineaDiv/>
                <DescripUl>
                    <Icono src={seat} />
                    <DescripLi> {props.asientos}</DescripLi>
                    <Icono src={passengers} />
                    <DescripLi>{props.pasajeros}</DescripLi>
                    <Icono src={door} />
                    <DescripLi>{props.puertas}</DescripLi>
                </DescripUl>

                <DescripUl>
                    <Icono src={family} />
                    <DescripLi estilo={'descriptionDown'}> {props.categoria}</DescripLi>
                    <Icono src={manual} />
                    <DescripLi estilo={'descriptionDown'}> {props.transmision}</DescripLi>
                    <DescripLi estilo={'descriptionDown'}> </DescripLi>
                </DescripUl> 
                <FeatAndGuide>Features</FeatAndGuide>
                <LineaDiv/>
                <FeatAndGuide>Guidelines</FeatAndGuide>
                <LineaDiv />
                <br />

            </CardDescription> 
        </Fragment>
    )

};

export default BotonDescription;