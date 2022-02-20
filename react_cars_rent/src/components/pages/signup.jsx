import { Fragment, useState} from "react";
/* ------ */
import {FormBody, InputLogin, Error } from "./aLoginSignStyles"
/* ------ */
import {useNavigate, Link} from "react-router-dom"
import {useAuth} from "../context/authContext"
import { useForm } from "react-hook-form";
/* OJOJJOJOJ */
import { Cuerpo, Back, TextoLogIn, BodyForm, DivInputLogin } from "../loginSignIp/loginStyle";
/* OJOJJOJOJ */
import BtnGoogleLogin from "../loginSignIp/botonLoginGoogle";

function Signup () {
    const navigate = useNavigate();
    const [errorEmail, setErrorEmail] = useState()
    const [errorPassW, setErrorPassW] = useState()
    const {signup} = useAuth();
    const {register, formState: { errors }, handleSubmit} = useForm();
    /* ----------------------------------------- */
     const  onSubmit = async (data, e) => {
        e.preventDefault()
        if (data.password != data.confirmpassword) {
            return (
               setErrorPassW("Password don't match, try again") 
            )
        } try {
            setErrorPassW("")
            setErrorEmail("")
            await signup(data.email, data.password)
            navigate("/renta")
            console.log(data)
        } catch (e) {
            if (e.code === "auth/email-already-in-use") {
                setErrorEmail("Email already in use, please use another one or go to Login section to start!")
            } if (e.code === "auth/internal-error" || errors.email) {
                setErrorEmail ("Email invalid try with another")
            }
        }
      };
      
    return(
        <Fragment>
            <Cuerpo estilo={"Signup"}>
                 <Back>
                    <TextoLogIn estilo={"Back"}> 
                        <i className="fa fa-arrow-left" aria-hidden="true">&nbsp;</i>
                        <Link to="/" style={{textDecoration:'none', color: '#ffffff', fontWeight:'700'}}>  
                            Go Back 
                        </Link>  
                    </TextoLogIn>
                </Back>

                <BodyForm  onSubmit={handleSubmit(onSubmit)} >
            
                <TextoLogIn estilo={"Titulo"}> RentCar  </TextoLogIn>
                    <TextoLogIn estilo={"Subtitulo"}> Signup </TextoLogIn>
                    <br />
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
                    
                     <DivInputLogin>
                        <InputLogin
                            type="submit" value="Sign Up" estilo={"BtnSignIn"} />
                      </DivInputLogin>
                   
                    <TextoLogIn estilo={"NewAccount"}>Already have an account? &nbsp;
                        <Link to="/login" style={{ color: '#ececec'}}> Login </Link>
                    </TextoLogIn>
                    
                    <TextoLogIn>  Signup using Google</TextoLogIn> 
                    <BtnGoogleLogin />
                </BodyForm>
            </Cuerpo>
        </Fragment>
    )
};

export default Signup;