import { Fragment, useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useAuth } from '../context/authContext';
import BtnLogout from './buttonLogout';
import "./navBar.css"

function NavBar () {
    const [click, setClick] = useState(false);
    const  handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    /* --------Controlo del Log out--------- */
    const navigate = useNavigate();
    const {usuario, logout} = useAuth();
    const  handleLogout = async (e) => {
        e.preventDefault();
        try {
            await logout();   
            navigate ("/");
            console.log("el usuario ha salido de un dispositivo de menos de 920vw" + usuario.email)
        } catch (error) {
            console.log("Failed Logout" + error.message)
        }
    } 
    /* ----------------------------------- */   
    return(
        <Fragment>
            <nav className='navbar2'>
                <NavLink to="/renta" className='navBar2-logo2'>
                    RentaCAR  
                </NavLink>
                <div className='menu2-icon2' onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? 'nav2-menu2 active' : 'nav2-menu2'}>         
                    <li className='nav2-item2'>
                        <NavLink to="/renta" className='nav2-links2' onClick={closeMobileMenu}>
                           HOME 
                        </NavLink>
                    </li>
                    <li className='nav2-item2'>
                        <NavLink to="/contact" className='nav2-links2' onClick={closeMobileMenu}>
                            CONTACT US
                        </NavLink>
                    </li>
                    <li className='nav2-item2'>
                        <NavLink to="/" className='nav2-links2-mobileLogout2' onClick={closeMobileMenu}>
                            <span onClick={handleLogout}>LOGOUT</span> 
                        </NavLink>
                    </li>
                </ul>
                    <BtnLogout />              
            </nav>
        </Fragment>
    )
};

export default NavBar;


    
    