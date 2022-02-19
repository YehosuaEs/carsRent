import { Fragment, useState } from 'react';
import { Link } from "react-router-dom"
import BtnSignUp from './buttonSigUp';
import BtnLogin from './buttonLogin';
import "./navBar.css"

function NavBarHome () {
    const [click, setClick] = useState(false);

    const  handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


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
                        <Link to="/signup" className='nav-links-mobile' onClick={closeMobileMenu}>
                            SIGN UP
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/login" className='nav-links-mobile' onClick={closeMobileMenu}>
                            LOGIN
                        </Link>
                    </li>
                </ul>
                    <BtnLogin />              
                    <BtnSignUp />
            </nav>
        </Fragment>
    )
};

export default NavBarHome;