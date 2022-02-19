import { Link } from "react-router-dom"
import { Fragment } from "react";
import styledComponents from "styled-components";

export const BotonBook = styledComponents.button`
    background-color: #ffffff;
    border: 2px solid #ffffff;
    padding: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 600;
    width: 15em;
    border-radius: 1rem;
    color: #F1B648;
    cursor: pointer;   
    box-shadow: rgba(0, 0, 0, 0.06) 0 4px 6px;
   
        &:hover {
            color: #F1B648;
            background-color: #ffffffe0;
            transition: 0.2s;
            transform: translateY(-1px);

        }

        &:active {
            background-color: #ffffff;
            color: #F1B648;
            transform: translateY(0.5px);
        }
`;

function BtnBookCar () {

    return(
        <Fragment>
            <Link to="/login ">
                <BotonBook> Book your Vehicle </BotonBook> 
            </Link>
        </Fragment>
    )
};

export default BtnBookCar;