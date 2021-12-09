import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

const Services = ({ items }) => (
  <div className="services">
    <h3>Nuestros principales servicios</h3>
    <div className="services-items">
      {
        items.map(item => (
          <Link to={item.url} key={item.id}>
            <div className="items-item" style={{backgroundColor: item.background }}>
              <p>{item.title}</p>
            </div>
          </Link> 
        ))
      }
    </div>
  </div>
);

export default Services;