//import {useNavigate} from "react-router-dom"
import { Fragment, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../context/authContext';

import BtnLogout from './buttonLogout';
import "./navBar.css"

function NavBar () {
    const [click, setClick] = useState(false);

    const  handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

/*     const navigate = useNavigate();
    const {usuario, logout} = useAuth();
    
    const  handleLogout = async (e) => {
        e.preventDefault();
        try {
            await logout();   
            navigate ("/");
            alert("el usuario ha salido " + usuario.email)
        } catch (error) {
            console.log("Failed Logout" + error.message)

        }
    }   */
    return(
        <Fragment>
            <nav className='navbar'>
                <Link to="/" className='navBar-logo'>
                    RentaCAR  
                </Link>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                   
                    <li className='nav-item'>
                        <Link to="/login" className='nav-links' onClick={closeMobileMenu}>
                            BOOK YOU CAR 
                        </Link>
                    </li>
               
                    <li className='nav-item'>
                        <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>
                            CONTACT US
                        </Link>
                    </li>

            
                    <li className='nav-item'>
                        <Link to="/" className='nav-links-mobile' onClick={closeMobileMenu}>
                            LOGOUT
                        </Link>
                    </li>
                  
                </ul>
                {/* <button onClick={handleLogout}> Log out </button>  */}
                    <BtnLogout />              
            </nav>
        </Fragment>
    )
};

export default NavBar;


    
    
    /* const navigate = useNavigate();

    const handleClickLogin = (e) => {
        e.preventDefault();
        navigate ("/login")
    };

    const handleClickSignup = (e) => {
        e.preventDefault();
        navigate ("/signup")
    };




              <button onClick={handleClickLogin}> Login </button> 
              <button onClick={handleClickSignup}> Signup </button> 
 */