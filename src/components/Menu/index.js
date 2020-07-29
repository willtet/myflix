import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './menu.css'
import Button from '../Button'
//import ButtonLink from './components/ButtonLink';

import { Link } from 'react-router-dom'

function Menu(){
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt="Myflix logo"></img>
            </a>
            
            <Button as={Link} className='ButtonLink' to='/cadastro/video'> 
                Novo video
            </Button>
        </nav>
    );
}

export default Menu;