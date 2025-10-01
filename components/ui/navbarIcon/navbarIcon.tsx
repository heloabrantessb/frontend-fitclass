import React from "react";
import '../navbarIcon/navbarIcon.css';

interface NavbarIconProps{
    label: string;
    imgSrc: string;
    pathTo: string;
}

const NavbarIcon = ({label, imgSrc, pathTo}: NavbarIconProps) => {
    return(
        <a href={pathTo} className='navbarIcon'>
            <img className='icon' src={imgSrc}/>
            <p className='label'>{label}</p>
        </a>
    )
}

export default NavbarIcon;