import React from 'react'
import LogoUam from '../../../assets/images/jpg/logoUam.png'
import Avatar from '../../../assets/images/jpg/avatar1.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, animateScroll as scroll } from "react-scroll";

import './Navbar.scss'
export const Navbar = ({id}) => {
    return (
    <div className="container">
        <div className="section-content" id={id}></div>
        <div className="menu">
            <input type="checkbox" id="check"/>
            <label htmlFor="check" className="icons">
                <MenuIcon id="menu_icon"/>
                <CloseIcon id="close_icon"/>
            </label>
            <img src={LogoUam} alt="Logo UAM" className="logoUam" />
            <ul className="nav">
            <li>
            <Link
                activeClass="active"
                to="flexbox"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Flexbox</Link>
          </li>
          <li>
            <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Contact</Link>
          </li>
          <li>
            <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              > Products</Link>
          </li>
            </ul>
            <div className="avatar-container">
                <img src={Avatar} alt="Foto de perfil" className="avatar"/>
            </div>
        </div>
    </div>
    )
}
