import React from "react";
import '../navbarIcon/navbarIcon.css';

interface NavbarIconProps{
    label: string;
    imgSrc: string;
    pathTo: string;
}

const NavbarIcon = ({props: label, imgSrc, pathTo}: NavbarIconProps) => {
    return(
        <a href={props.pathTo} className='navbarIcon'>
            <img className='icon' src={props.imgSrc}/>
            <p className='label'>{props.label}</p>
        </a>
    )
}

export default NavbarIcon;