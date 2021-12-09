import React from 'react';
import Whatsapp from '../../assets/img/whatsapp.png'
import './index.scss';

const year = new Date().getFullYear();

const Footer = () => (
  <footer>
    <a href="https://wa.me/573115423405" target="_blank" rel="noreferrer">
      <img className="Contact-whatsapp" src={Whatsapp} alt="Contactenos a través de Whatsapp" />
    </a>
    <p>
      © Dra. Andrea Rivas {year}
    </p>
  </footer>
);

export default Footer;
