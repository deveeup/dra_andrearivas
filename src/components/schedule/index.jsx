import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const schedule = () => (
  <div className="Schedule">
    <span>¿Necesitas agendar una cita médica?</span>
    <p>A continuación puedes conocer los distintos tipos de citas médicas</p>
    <button>
      <Link to="/citas">
        Agendar
      </Link>
    </button>
  </div>
);

export default schedule;