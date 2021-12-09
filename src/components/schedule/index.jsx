import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const schedule = () => (
  <div className="Schedule">
    <span>¿Necesitas agendar una cita médica?</span>
    <button>
      <Link to="/citas">
        Agendar cita
      </Link>
    </button>
  </div>
);

export default schedule;