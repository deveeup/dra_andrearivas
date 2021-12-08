import React from 'react';
import './index.scss';

const year = new Date().getFullYear();

const Footer = () => (
  <footer>
    <p>
      © Dra. Andrea Rivas {year} | <span>Médico Veterinario</span>
    </p>
  </footer>
);

export default Footer;
