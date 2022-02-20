import { Fragment, useState} from "react";
import {useNavigate, Link} from "react-router-dom"
import {useAuth} from "../context/authContext"
import { useForm } from "react-hook-form";
import { CuerpoSignup, BackSignup, TextoSignup, BodyFormSignup, ErrorSignup, InputSignup, DivInputSignup } from "../loginSignIp/signupStyle";
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
            <CuerpoSignup estilo={"Signup"}>
                 <BackSignup>
                    <TextoSignup estilo={"Back"}> 
                        <i className="fa fa-arrow-left" aria-hidden="true">&nbsp;</i>
                        <Link to="/" style={{textDecoration:'none', color: '#ffffff', fontWeight:'700'}}>  
                            Go Back 
                        </Link>  
                    </TextoSignup>
                </BackSignup>

                <BodyFormSignup  onSubmit={handleSubmit(onSubmit)} >
            
                <TextoSignup estilo={"Titulo"}> RentCar  </TextoSignup>
                    <TextoSignup estilo={"Subtitulo"}> Signup </TextoSignup>
                    <br />
                    <label htmlFor="email">Enter your email </label>
                    {errors.email && <ErrorSignup >{errors.email.message}</ErrorSignup>}
                    <ErrorSignup>{errorEmail}</ErrorSignup>
                    <InputSignup
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
                    {errors.password && <ErrorSignup>{errors.password.message}</ErrorSignup>}
                    <InputSignup 
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
                    <ErrorSignup>{errorPassW}</ErrorSignup> {errors.confirmpassword && <ErrorSignup>{errors.confirmpassword.message}</ErrorSignup>}
                    <InputSignup 
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
                    <DivInputSignup>
                        <InputSignup
                            type="submit" value="Sign Up" estilo={"BtnSignup"} />
                    </DivInputSignup>
                   
                    <TextoSignup estilo={"NewAccount"}>Already have an account? &nbsp;
                        <Link to="/login" style={{ color: '#ececec'}}> Login </Link>
                    </TextoSignup>
                    <br />
                    <hr />
                    <br />                    
                    <TextoSignup>  Signup using Google</TextoSignup> 
                    <BtnGoogleLogin />
                </BodyFormSignup>
            </CuerpoSignup>
        </Fragment>
    )
};

export default Signup;