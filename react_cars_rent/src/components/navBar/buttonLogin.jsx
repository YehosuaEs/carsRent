import "./button.css"
import { Link } from "react-router-dom"
import { Fragment } from "react";

function BtnLogin () {

    return(
        <Fragment>
            <Link to="/login ">
                <button className="btnLogin">Loginnn</button> 
            </Link>
        </Fragment>
    )
};

export default BtnLogin;