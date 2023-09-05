import React from 'react'
import LogoUam from '../../../assets/images/jpg/logoUam.png'
import Avatar from '../../../assets/images/jpg/avatar1.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.scss'
export const Navbar = () => {
    return (
    <div className="container">
        <div className="menu">
            <input type="checkbox" id="check"/>
            <label htmlFor="check" className="icons">
                <MenuIcon id="menu_icon"/>
                <CloseIcon id="close_icon"/>
            </label>
            <img src={LogoUam} alt="Logo UAM" className="logoUam" />
            <ul className="nav">
                <li><a href="./pages/flex.html">Flex box</a></li>
                <li><a href="./pages/products.html">Products</a></li>
                <li><a href="./pages/contact.html">Contact</a></li>
            </ul>
            <div className="avatar-container">
                <img src={Avatar} alt="Foto de perfil" className="avatar"/>
            </div>
        </div>
    </div>
    )
}
