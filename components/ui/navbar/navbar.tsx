import React from 'react';
import '../navbar/navbar.css';

import NavbarIcon from '../navbarIcon/navbarIcon';

const Navbar = () => {
    return (
        <div className='navbarMain'>
            <NavbarIcon label="Perfil" imgSrc="https://upload.wikimedia.org/wikipedia/commons/4/45/Person_icon_%28the_Noun_Project_2817719%29.svg" pathTo="#"/>
            <NavbarIcon label="Academias" imgSrc="https://upload.wikimedia.org/wikipedia/commons/8/85/Noun_Project_Map_icon_1463108.svg" pathTo="#"/>
            <NavbarIcon label="Agendar" imgSrc="https://upload.wikimedia.org/wikipedia/commons/c/ca/Calendar_icon_2.svg" pathTo="#"/>
            <NavbarIcon label="Minhas Aulas" imgSrc="https://upload.wikimedia.org/wikipedia/commons/3/30/Home_free_icon.svg" pathTo="#"/>
        </div>
    );
}

export default Navbar;