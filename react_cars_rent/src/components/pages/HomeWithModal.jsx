import  { Fragment } from "react";
import {Container, Boton} from "./aPagesStyles"
import NavBarHome from "../navBar/navBarHome";
//import ModalLogin from "../loginSignIp/loginModal";
//import ModalSignUp from "../loginSignIp/signUpModal"; 
//import { useAuth } from "../context/authContext"
import {useNavigate} from "react-router-dom"

function Home () {
    const [showModal, setShowModal] = useState(false);
    const [active, setActive] = useState("login"); 
    //const authenticaContext = useContext(authContext);
    const authContext = useAuth()
    const {user} = useAuth()
    const navigate = useNavigate(); 

    const handleOpenModal = () => {
        setShowModal(prev => !prev)
        setShowModal(!showModal)
        navigate("/login")
    };   

    return(
        <Fragment>
                <NavBarHome />

                <Container>
                    Home

                </Container>
                <Container estilo={"Renta"} >
                    <h3>Rent Cars </h3>         
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




                     
