import React from 'react';
import '../navbar/navbar.css';

import NavbarIcon from '../navbarIcon/navbarIcon';

const Navbar = () => {
    return (
        <div className='navbarMain'>
            <NavbarIcon label="Academias" imgSrc="https://upload.wikimedia.org/wikipedia/commons/8/85/Noun_Project_Map_icon_1463108.svg" pathTo="/academias" />
            <NavbarIcon label="Aulas" imgSrc="https://upload.wikimedia.org/wikipedia/commons/3/30/Home_free_icon.svg" pathTo="#" />
            <NavbarIcon label="Reservas" imgSrc="https://upload.wikimedia.org/wikipedia/commons/c/ca/Calendar_icon_2.svg" pathTo="#" />
            <NavbarIcon label="Perfil" imgSrc="https://upload.wikimedia.org/wikipedia/commons/4/45/Person_icon_%28the_Noun_Project_2817719%29.svg" pathTo="/profile" />
        </div>
    );
}

export default Navbar;