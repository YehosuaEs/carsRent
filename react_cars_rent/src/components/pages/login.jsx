import { Fragment, useState } from 'react';
import {Cuerpo, Back, BodyForm, InputLogIn, TextoLogIn, Errorr, DivInputLogin } from "../loginSignIp/loginStyle"
import { useNavigate,  Link} from "react-router-dom"
import {useAuth} from "../context/authContext"
import { useForm } from "react-hook-form";
import BtnGoogleLogin  from "../loginSignIp/botonLoginGoogle"

function Login () {
    const navigate = useNavigate();
    const [errorEmail, setErrorEmail] = useState()
    const [errorPassW, setErrorPassW] = useState()
    const {login, loginWithGoogle} = useAuth();
    const {register, formState: {errors}, handleSubmit} = useForm();

    async function onSubmit (data, e) {
        e.preventDefault()
            try  {
                await login(data.email, data.password)
                navigate("/renta")
            } catch (error) {
                if (error.code === "auth/user-not-found") {
                    setErrorEmail("Email not found, please go to signup section to start!")
                    console.log(error.code)
                } if (error.code !== "auth/user-not-found" && error.code === "auth/wrong-password" ) {
                    setErrorEmail("")
                    setErrorPassW("Incorrect Password, please try again!")
                }
            }
    };

    return (
        <Fragment>
            <Cuerpo>
                <Back>
                    <TextoLogIn estilo={"Back"}> 
                        <i className="fa fa-arrow-left" aria-hidden="true">&nbsp;</i>
                        <Link to="/" style={{textDecoration:'none', color: '#ffffff', fontWeight:'700'}}>  
                            Go Back
                        </Link>  
                    </TextoLogIn>
                </Back>
                <BodyForm onSubmit={handleSubmit(onSubmit)}>
                    <TextoLogIn estilo={"Titulo"}> RentCar  </TextoLogIn>
                    <TextoLogIn estilo={"Subtitulo"}> Login </TextoLogIn>
                    <br />
                    <label htmlFor="email">Enter your email </label>
                    {errorEmail && <Errorr>{errorEmail}</Errorr>}
                    <InputLogIn
                        type="email" 
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        {...register('email', {
                            required: true,
                            pattern: {
                            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            },
                        })}
                    /> 
                    <label htmlFor="password">Password </label>
                    {errorPassW && <Errorr>{errorPassW}</Errorr>}
                    <InputLogIn 
                        estilo="Password"
                        type="password"  
                        name= "password"
                        id="password"
                        placeholder="Enter your password"
                        {...register('password', { 
                            required: true, minLength: {
                                value: 6,
                            }, 
                        })}
                    />
                    <TextoLogIn estilo={"forgotPassLogin"}>forgot your password?</TextoLogIn>
                    <DivInputLogin>
                        <InputLogIn
                            type="submit" value="Login" estilo={"BtnSignIn"} />
                    </DivInputLogin>
                    
                    <TextoLogIn estilo={"NewAccount"}>Don't have an account? &nbsp;
                        <Link to="/signup" style={{ color: '#ececec'}}>  Signup </Link>
                    </TextoLogIn>
                    <br />
                    <hr />
                    <br />
                    <TextoLogIn> Login using Google</TextoLogIn> 
                   
                    <BtnGoogleLogin />
                   
                </BodyForm>
            </Cuerpo>

        </Fragment>    
    )

};

export default Login;