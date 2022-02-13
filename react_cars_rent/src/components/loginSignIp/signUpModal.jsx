import { Fragment } from "react"
import { FormBody, ModalContent, Overlay, InputLogin, CloseModal } from "./loginModalStyles"
import { useNavigate } from "react-router-dom";
import {useAuth} from "../context/authContext"
import { useForm } from "react-hook-form";


function ModalSignUp ({showModal, setShowModal, setActive})  {
    const navigate = useNavigate();
    const {signup} = useAuth();
    const {errorEmail, setErrorEmail} = useState()
    const [errorPassW, setErrorPassW] = useState()
    const {register, formState: { errors }, handleSubmit} = useForm();
  //const [user, setUser] = useState({email:" ", password:" "});
    /* const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value});
    };  */ 
    /* Para detener el scroll del fondo */   
    if(showModal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }   
    /* ----------------------------------------- */
    const  onSubmit = async (data, e) => {
        e.preventDefault()
        if (data.password != data.confirmpassword) {
            return (
               setErrorPassW("Password don't match, try again") 
            )
        } else {}
            try  {
                setErrorPassW("")
                await signup(data.email, data.password)
                navigate("/rentacars")
                console.log(data)
            } catch (error) {
                console.log(error.message)
            }
      };
        /* console.log(errors); */

        /*  const handleSubmit = async(e) => {
                e.preventDefault();
                try {
                    //await signup(user.email, user.password);
                } catch (error) { 
                //console.log("SRTGSDF");
                };       
            };   */
    return (
        <Fragment>
            {
                showModal ?
                <>
                    <Overlay onClick={() => setShowModal (prev => !prev)}></Overlay>
                    <ModalContent>
                        <FormBody onSubmit={handleSubmit(onSubmit)}>
                            <h2> RentCar Signup </h2>
                            <label htmlFor="email">Enter your email </label>
                            {errors.email && <Error >{errors.email.message}</Error>}
                            <Error>{errorEmail}</Error>
                            <InputLogin
                                type="email" 
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                {...register('email', {
                                    required: true,
                                    pattern: {
                                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "invalid email address"
                                    },
                                })}
                            /> 
                            <label htmlFor="password">Password </label>
                            {errors.password && <Error>{errors.password.message}</Error>}
                            <InputLogin 
                                type="password"  
                                name= "password"
                                id="password"
                                placeholder="Enter your password"
                                {...register('password', { 
                                    required: true, minLength: {
                                        value: 6,
                                        message: "minin 6 characthers",
                                    }, 
                                })}
                            /> 
                            <label htmlFor="confirmpassword">Confirm password:</label>
                            <Error>{errorPassW}</Error> {errors.confirmpassword && <Error>{errors.confirmpassword.message}</Error>}
                            <InputLogin 
                                type="password"  
                                name= "confirmpassword"
                                id="confirmpassword"
                                placeholder="Confirm your password"
                            {...register('confirmpassword', { 
                                    required: true, minLength: {
                                        value: 6,
                                        message: "minin 6 characthers",
                                    }, 
                            })}
                            /> 
                            {/* <InputLogin 
                                type="password"  
                                name= "confirmpassword"
                                id="confirmpassword"
                                placeholder="Confirm your password"
                                onChange={(e) => setConfirmPaswword(e.target.value)} 
                                value={confirmPassword.confirmpassword} 
                            /> */}
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