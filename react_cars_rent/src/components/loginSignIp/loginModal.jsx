import { Fragment, useState } from "react";
import "./modal.css"
import { Overlay, ModalContent, CloseModal, InputLogin, FormBody} from "./loginModalStyles";
import { useNavigate } from "react-router-dom";



const ModalLogin =  ({showModal, setShowModal, setActive}) => {
    const navigate = useNavigate();
    const [emailData, setEmailData] = useState(" ");
    const [passwordData, setPasswordData] = useState (" ");
     /* Para detener el scroll del fondo */    
    if(showModal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }   
    
    const handleClick = (e) => {
        e.preventDefault();
        navigate ("/rentaCars"); 
        console.log(emailData, passwordData)
        
    };

    return (
        <Fragment>
            { 
                showModal ? 
                <>
                    <Overlay onClick={() => setShowModal (prev => !prev)} ></Overlay>   
                    <ModalContent>
                        <FormBody onSubmit={handleClick}>
                                
                            <h2> RentCar Login </h2>

                            <InputLogin
                                type="email" 
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                onChange={(e) => setEmailData(e.target.value)} 
                                value={emailData.email}
                            /> 
                            <InputLogin 
                                type="password"  
                                name= "password"
                                id="password"
                                placeholder="Enter your password"
                                onChange={(e) => setPasswordData(e.target.value)} 
                                value={passwordData.password} 
                            />
                            <p>forgot your password?</p>
                            <div>
                                <InputLogin
                                    type="submit" value="Login" estilo={"BtnSignIn"} />
                            </div>
                            
                            <p estilo={"NewAccount"}>Don't have an account? 
                                {/* <a href="#" onClick={() => setActive("signup")} >Signup </a> */}
                                <span onClick={() => setActive("signup")}> Signup </span>
                            </p>
                            <p> or Login using </p>

                            
                            <CloseModal  onClick={() => setShowModal (prev => !prev)}>
                                close
                            </CloseModal>

                        </FormBody>
                    </ModalContent>  
                </>  
                : null
            } 
        </Fragment>
    )
};
export default ModalLogin;


