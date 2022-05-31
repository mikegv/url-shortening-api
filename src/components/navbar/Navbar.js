import React from 'react';
import './navbar.css'
import Logo from '../../images/logo.svg'
import { StyledButton } from '../styledComponents/styledComponents';

const Navbar = () => {
    return (
        <div className='nav'>
            <ul className='navPages'>
            <li><img src={Logo} alt='website logo' /> </li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
            </ul>
            <ul className='loginArea'>
            <li>Login</li>
            <li><StyledButton>Sign Up</StyledButton></li>
            </ul>
        </div>
    );
};

export default Navbar;