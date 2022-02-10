import { Fragment } from "react"
import { FormBody, ModalContent, Overlay, InputLogin, CloseModal } from "./loginModalStyles"
import { useNavigate } from "react-router-dom";

const ModalSignUp = ({showModal, setShowModal, setActive}) => {
   const navigate = useNavigate();
    /* Para detener el scroll del fondo */   
    if(showModal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }   


    const handleClick = (e) => {
        e.preventDefault();
        /* authenticate() */
       navigate ("/rentaCars"); 
        
    };

    return (
        <Fragment>
            {
                showModal ?
                <>
                    <Overlay onClick={() => setShowModal (prev => !prev)}></Overlay>
                    <ModalContent>
                        <FormBody onSubmit={handleClick}>
                            <h2> RentCar Signup </h2>
                            <InputLogin
                                type="text" 
                                name="text"
                                id="text"
                                placeholder="Enter your username"
                                /* onChange={e => setDetallesLogin({...detallesLogin, email: e.target.value})} 
                                value={detallesLogin.email} */
                            /> 
                            <InputLogin
                                type="email" 
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                /* onChange={e => setDetallesLogin({...detallesLogin, email: e.target.value})} 
                                value={detallesLogin.email} */
                            /> 
                            <InputLogin 
                                type="password"  
                                name= "password"
                                id="password"
                                placeholder="Enter your password"
                                /*  onChange={e => setDetallesLogin({...detallesLogin, password: e.target.value})} 
                                value={detallesLogin.password} */
                            />
                            <InputLogin 
                                type="password"  
                                name= "confirmpassword"
                                id="confirmpassword"
                                placeholder="Confirm your password"
                                /*  onChange={e => setDetallesLogin({...detallesLogin, password: e.target.value})} 
                                value={detallesLogin.password} */
                            />
                            <div>
                                <InputLogin
                                    type="submit" value="Sign Up" estilo={"BtnSignIn"} />
                            </div>
                            <p estilo={"NewAccount"}>Already have an account? 
                                {/* <a href="/#" onClick={() => setActive("login")} >Login</a> */}
                                <span onClick={() => setActive("login")} >Login </span>
                            </p>
                            <p> or Signup using </p>

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

export default ModalSignUp;