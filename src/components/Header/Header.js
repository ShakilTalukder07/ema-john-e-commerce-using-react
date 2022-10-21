import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { AuthContext } from '../context/UserContext';
import './Header.css'

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    return (
        <nav className='header'>
            <img src={logo} alt='' />
            <div>
                <Link to="/Shop">Shop</Link>
                <Link to="/Orders">Orders</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/About">About</Link>
                {
                    user?.uid ?
                        <button className='btn-logout' onClick={logOut}>Sign Out</button>
                        :
                        <>
                            <Link to='/Login'>Login</Link>
                            <Link to='/Signup'>Sign up</Link>
                        </>
                }
                <span>{user?.email}</span>
            </div>
        </nav>
    );
};

export default Header;