import { Fragment, useState } from 'react';
import {FormBody, InputLogin, Error } from "./aLoginSignStyles"
import { useNavigate,  Link} from "react-router-dom"
import {useAuth} from "../context/authContext"
import { useForm } from "react-hook-form";

function Login () {
    const navigate = useNavigate();
    const [errorEmail, setErrorEmail] = useState()
    const [errorPassW, setErrorPassW] = useState()
    const {login} = useAuth();
    const {register, formState: {errors}, handleSubmit} = useForm();

    async function onSubmit (data, e) {
        e.preventDefault()
            try  {
                await login(data.email, data.password)
                navigate("/renta")
                console.log(data)
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
     const  handleGoogleSignin = (e) => {
         e.preventDefault()

     }
    return (
        <Fragment>
            <FormBody onSubmit={handleSubmit(onSubmit)}>
                <h2> RentCar Login </h2>
                <label htmlFor="email">Enter your email </label>
                {errorEmail && <Error>{errorEmail}</Error>}
                <InputLogin
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
                {errorPassW && <Error>{errorPassW}</Error>}
                <InputLogin 
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
                <p>forgot your password?</p>
                <div>
                    <InputLogin
                        type="submit" value="Login" estilo={"BtnSignIn"} />
                </div>
                
                <p estilo={"NewAccount"}>Don't have an account? 
                    {/* <a href="#" onClick={() => setActive("signup")} >Signup </a> */}
                    <Link to="/signup" > Signup </Link>
                </p>
                <p> or Login using Google</p>
                <button onClick={handleGoogleSignin}>GOOGLE</button>

                
            </FormBody>

        </Fragment>    
    )

};

export default Login;