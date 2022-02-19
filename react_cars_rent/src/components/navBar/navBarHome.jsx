import { Fragment, useState } from 'react';
import {useNavigate, Link } from "react-router-dom"
import { DropDown } from "./dropDown"
import BtnSignUp from './buttonSigUp';
import BtnLogin from './buttonLogin';
import "./navBar.css"




function NavBarHome () {
    const [click, setClick] = useState(false);
    const[dropDown, setDropDown] = useState(false);

    const  handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

/* -------- login y signup botons ------- */
    const navigate = useNavigate();
    const handleClickLogin = (e) => {
        e.preventDefault();
        navigate ("/login")
    };
    const handleClickSignup = (e) => {
        e.preventDefault();
        navigate ("/signup")
    };
/* ---------------------------------------- */
    return(
        <Fragment>
            <nav className='navbar'>
                <Link to="/" className='navBr-logo'>
                    RentaCAR  
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            HOME
                        </Link>
                    </li>
               
                    <li className='nav-item'>
                        <Link to="/login" className='nav-links' onClick={closeMobileMenu}>
                            BOOK YOU CAR <i className='fas fa-caret-down' />
                        </Link>
                        {dropDown && <DropDown />}
                    </li>
               
                    <li className='nav-item'>
                        <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>
                            CONTACT US
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="/signup" className='nav-links-mobile' onClick={closeMobileMenu}>
                            SIGN UP
                        </Link>
                    </li>
                </ul>
                    <BtnSignUp />
                    <BtnLogin />
                                   
            </nav>
            


        
            
                <button onClick={handleClickLogin}> Login </button>
            
                <button onClick={handleClickSignup}> Signup </button> 
            
               
              
             

        </Fragment>

    )
};

export default NavBarHome;