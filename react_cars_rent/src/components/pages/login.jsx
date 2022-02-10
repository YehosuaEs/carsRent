import {FormBody, InputLogin } from "../loginSignIp/loginModalStyles"
import {useNavigate, Link} from "react-router-dom"




function Login () {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        /* authenticate() */
        navigate ("/rentaCars"); 
        
    };
    return (
        <FormBody onSubmit={handleClick}>
            
            <h2> RentCar Login </h2>

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
            <p>forgot your password?</p>
            <div>
                <InputLogin
                    type="submit" value="Login" estilo={"BtnSignIn"} />
            </div>
            
            <p estilo={"NewAccount"}>Don't have an account? 
                {/* <a href="#" onClick={() => setActive("signup")} >Signup </a> */}
                <Link to="/signup" > Signup </Link>
            </p>
            <p> or Login using </p>

            
        </FormBody>
    )

};

export default Login;