import "./button.css"
import { Link } from "react-router-dom"
import { Fragment } from "react";

function BtnSignUp () {

    return(
        <Fragment>
            <Link to="/signup ">
                <button className="btn">SignupBtn</button> 
            </Link>
        </Fragment>
    )
};

export default BtnSignUp;