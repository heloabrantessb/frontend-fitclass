import React from "react";
import '../navbarIcon/navbarIcon.css';

const NavbarIcon = (props: label, imgSrc, pathTo) => {
    return(
        <a href={props.pathTo} className='navbarIcon'>
            <img className='icon' src={props.imgSrc}/>
            <p className='label'>{props.label}</p>
        </a>
    )
}

export default NavbarIcon;