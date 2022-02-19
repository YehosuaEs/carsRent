import "../navBar/button.css"
import { Link } from "react-router-dom"
import { Fragment } from "react";
import styledComponents from "styled-components";

export const BotonBook = styledComponents.button`
     background-color: #dddddd;
     font-size: 24px;
     border-radius: 10px;
     cursor: pointer;
     
`;

function BtnBookCar () {

    return(
        <Fragment>
            <Link to="/login ">
                <BotonBook className="btnBookCar">Book your Vehicle</BotonBook> 
            </Link>
        </Fragment>
    )
};

export default BtnBookCar;