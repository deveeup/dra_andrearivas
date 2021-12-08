import React from 'react';
import ProfileImage from '../../assets/img/draandrea.jpg';
import './index.scss';

const profileComponent = () => (
  <div className="ProfileComponent">
    <figure>
      <img src={ProfileImage} alt="" />
    </figure>
    <div className="ProfileComponent-Info">
      <h2>Dra. Andrea Rivas</h2>
      <span>Médico Veterinario.</span>
      <p>+7 Años de experiencia, espcializada en animales domésticos como perros y gatos.</p>
    </div>
  </div>
);

export default profileComponent;
