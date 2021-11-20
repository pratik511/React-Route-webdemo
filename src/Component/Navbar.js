import React from 'react';
import { NavLink } from 'react-router-dom';
// import Logo from '../assets/img4.jpg';

const Navbar = () => {
    return (
        <div className="Nav" >
            <nav>
                {/* <img src={Logo} className="Navimg" /> */}

                {/* <NavLink to="/" className="Navimg" > Home </NavLink> */}
                <NavLink to="/" className="Navbar" > Home </NavLink>
                <NavLink to="/about" className="Navbar" > About </NavLink>
                <NavLink to="/contact" className="Navbar" > Contact </NavLink>
                <NavLink to="/login" className="Navbar Nav1" > Log In </NavLink>
                <NavLink to="/register" className="Navbar Nav1" > Registration </NavLink>
                
            </nav>
        </div>
    )
}

export default Navbar;