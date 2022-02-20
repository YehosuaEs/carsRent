import { Fragment, useState, useEffect} from "react";
import data from "../../dataCars/data"
import {Container, Card, Botones, ImgCar, Texto, CardSectionA, CardSectionB} from "./carsRentStyles"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseconfig";
import ModalBooking from "./modalBookCar";
import BotonDescription from "./botonDescription";
import avanza from "../../img/avanza.png"


function CarCard () {
    const [cars, setCars] = useState ([]);
    const carsCollectionRef = collection(db, "cars")

     useEffect(() => {
        const obtenerData = async () => {
            const datos = await getDocs(carsCollectionRef);
            setCars(datos.docs.map((doc) => (
                {...doc.data(), id: doc.id}
            )));
        }
        obtenerData();
    }, [])  

    /* -----SECCION DEL PARA GESTIONAR EL MODAL -------- */
    const [showModal, setShowModal] = useState(false);
    const [carInfo, setCarInfo] = useState({})

    const  handleOpenModal = () => {
        setShowModal(prev => !prev)
        setShowModal(!showModal)
        console.log(carInfo)
     }; 

    return (
        <Fragment >
            <Container>
                {
                    cars.map((cars, id) => { return (
                        <Card key={id} >
                            <CardSectionA  >
                                <CardSectionA estilo={"CardSectionA_1"}>
                                    <ImgCar   src={avanza} ></ImgCar>
                                    <Botones  onClick={() =>{ handleOpenModal()}} estilo={"BotonBook"}  >Book vehicle</Botones>
                                    { showModal ? <ModalBooking cars={setCarInfo} showModal={showModal} setShowModal={setShowModal} /> : null}
                                </CardSectionA>
                                
                                <CardSectionA estilo={"CardSectionA_2"}>
                                    <CardSectionA> 
                                        <Texto estilo={"Modelo"}>{cars.model} {cars.manufacturer}</Texto>
                                    </CardSectionA>  
                                    <CardSectionA>
                                        <Texto estilo={"Price"}>{cars.price} MXN </Texto>
                                    </CardSectionA>
                                </CardSectionA> 
                            </CardSectionA>
                            <CardSectionB>
                                <BotonDescription 
                                    asientos={cars.seats}
                                    pasajeros={cars.passengers}
                                    puertas={cars.doors}
                                    categoria ={cars.category}
                                    transmision={cars.transmission} 
                                /> 
                            </CardSectionB> 
                        </Card>
                    )})
                }
            </Container>          
        </Fragment>
    )
};
export default CarCard;

/* props.asientos}</li>
                    <li>{props.pasajeros}</li>
                    <li>{props.combustible}</li>
                </ol>
                <ol>
                    <li>{props.puertas}</li>
                    <li>{props.categoria}</li>
                    <li>{props.trasnmision}</li>
                </ol> */