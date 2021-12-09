import React from 'react';
import Whatsapp from '../../assets/img/whatsapp.png'
import Phone from '../../assets/img/phone.png'
import './index.scss';

const year = new Date().getFullYear();

const Footer = () => (
  <footer>
    <div className="Contact">
      <a href="tel:3115423405" target="_blank" rel="noreferrer">
        <img className="Contact-phone" src={Phone} alt="Contactenos a través de una llamada" />
      </a>
      <a href="https://wa.me/573115423405" target="_blank" rel="noreferrer">
        <img className="Contact-whatsapp" src={Whatsapp} alt="Contactenos a través de Whatsapp" />
      </a>
    </div>
    <p>
      © Dra. Andrea Rivas {year}
    </p>
  </footer>
);

export default Footer;
