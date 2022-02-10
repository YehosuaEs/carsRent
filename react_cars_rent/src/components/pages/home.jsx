import react, { Fragment, useState } from "react";
import {Container, Boton} from "./aPagesStyles"
import ModalLogin from "../loginSignIp/loginModal";
import ModalSignUp from "../loginSignIp/signUpModal";




function Home () {
    const [showModal, setShowModal] = useState(false);
    const [active, setActive] = useState("login"); 

     const handleOpenModal = () => {
        setShowModal(prev => !prev)
        //setShowModal(!showModal)
    };   


    return(
        <Fragment>
           
                <Container>
                    Home
                </Container>
                <Container estilo={"Renta"}>
                    Rent Cars                
                </Container>
            
                <Container estilo={"Boton"}>    
                    
                    <Boton onClick={() => handleOpenModal()} > Reserva tu coche gratis</Boton>
                     
                        {active === "login" && <ModalLogin showModal={showModal} setShowModal={setShowModal}  setActive={setActive}/> }
                        {active === "signup" && <ModalSignUp showModal={showModal} setShowModal={setShowModal} setActive={setActive} />}  
                        
                </Container>


        </Fragment>

    )
};

export default Home;




                        {/* 
                        {active === "login" && <ModalLogin showModal={showModal} setShowModal={setShowModal}  setActive={setActive}/>}
                        {active === "signup" && <ModalSignUp showModal={showModal} setShowModal={setShowModal} setActive={setActive} />}  */}
