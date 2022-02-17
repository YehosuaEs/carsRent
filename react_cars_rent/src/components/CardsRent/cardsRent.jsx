import { Fragment, useState, useEffect} from "react";
import data from "../../dataCars/data"
import {Container, Card, CardDescription, Botones, ImgCar, Texto, CardSectionA, CardSectionB} from "./carsRentStyles"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseconfig";
import ModalBooking from "./modalBookCar";


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
    const handleOpenModal = () => {
         setShowModal(prev => !prev)
         setShowModal(!showModal)
     }; 
    return (
        <Fragment >
            <Container>
                {
                    cars.map((cars, id) => { return (
                        <Card key={id} >
                            <CardSectionA  >
                                <CardSectionA estilo={"CardSectionA_1"}>
                                    <ImgCar  /* src={items.img} */></ImgCar>
                                    <Botones onClick={() => handleOpenModal()} estilo={"BotonBook"}>Book vehicle</Botones>
                                    { showModal ? <ModalBooking showModal={showModal} setShowModal={setShowModal} /> : null}
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
                            {/*  <CardSectionB>
                                <Boton /> 
                            </CardSectionB> */}
                        </Card>
                    )})
                }
            </Container>          
        </Fragment>
    )
};
export default CarCard;

/* Llevarmelo a otro componente para tener mas espacio limpio */
   /*  const [pressDescripcion, setPressDescripcion] = useState(false)
    const handleclickDetails = (e) => {
        e.preventDefault();
        setPressDescripcion(!pressDescripcion)
    };

     const Boton = () => {
        return (
            <Fragment>
                <Botones estilo={"BotonDetails"}type="button" onClick={handleclickDetails}>Availability and details </Botones>
                <CardDescription display={pressDescripcion ? 'block' : 'none'}>
                    <h1>DESCRIPCION</h1>
                </CardDescription> 
            </Fragment>
        )
    };  */