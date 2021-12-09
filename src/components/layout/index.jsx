import React from 'react';
import Header from '../header/index';
import Footer from '../footer/index';
import Whatsapp from '../../assets/img/whatsapp.png'
import './index.scss';

const Layout = (props) => (
  <div className="Layout">
    <Header />
      {props.children}
      <a href="https://wa.me/573115423405" target="_blank" rel="noreferrer">
        <img className="Layout-whatsapp" src={Whatsapp} alt="Contactenos a través de Whatsapp" />
      </a>
    <Footer />
  </div>
);

export default Layout;


