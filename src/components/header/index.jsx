import React from 'react';
import BurgerMenu from '../../assets/img/burgerMenu.png';
import LogoAR from '../../assets/img/logo.png';
import './index.scss'

const Header = () => (
  <header>
    <img src={LogoAR} className="logo" alt="Dra Andrea Rivas Logo" />
    <img src={BurgerMenu} className="burgerMenu" alt="Menú desplegable" />
  </header>
);

export default Header;