import React from 'react';
import './index.scss';

const year = new Date().getFullYear();

const Footer = () => (
  <footer>
    <p>
      © Dra. Andrea Rivas {year}
    </p>
  </footer>
);

export default Footer;
