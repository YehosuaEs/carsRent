import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../context/authContext';
import google from "../../img/iconosSocial/google.png"
import {ImgGoogle, DivGoogle, TextoLogIn} from "../loginSignIp/loginStyle"


function BtnGoogleLogin () {
    const navigate = useNavigate();
    const {loginWithGoogle} = useAuth();
    
    const handleGoogleLogin = async (e) => {
        e.preventDefault()
        try {
           await loginWithGoogle()
           navigate("/renta")
        } catch (error) {
            console.log(error.message)
        }

   };

    return(
        <Fragment>
            <Link to="/renta">
                <DivGoogle>
                
                <br />
                    <TextoLogIn estilo={"SpanGoogle"} onClick={handleGoogleLogin} >
                        <ImgGoogle src={google} alt="Icono de Google"/>
                    </TextoLogIn> 
                </DivGoogle>
            </Link>
        </Fragment>
    )
};

export default BtnGoogleLogin;