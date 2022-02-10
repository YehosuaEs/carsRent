import {FormBody, InputLogin } from "../loginSignIp/loginModalStyles"
import {useNavigate, Link} from "react-router-dom"



function Signup () {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        /* authenticate() */
        navigate ("/rentaCars"); 
        
    };

    return(

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
                <Link to="/login"  > Login </Link>
            </p>
            <p> or Signup using </p>
        </FormBody>

    )
};

export default Signup;