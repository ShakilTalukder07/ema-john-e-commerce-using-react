import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} />
            <div>
                <Link to="/Shop">Shop</Link>
                <Link to="/Orders">Orders</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/About">About</Link>
                <Link to='/Login'>Login</Link>
                <Link to='/Signup'>Sign up</Link>
            </div>
        </nav>
    );
};

export default Header;