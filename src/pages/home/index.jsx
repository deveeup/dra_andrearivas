import React from 'react';
import Layout from '../../components/layout/index';
import Services from '../../components/services/index';
import ProfileComponent from '../../components/profileInfo';
import Schedule from '../../components/schedule';

const items = [
  {
    id: 1,
    type: '',
    background: '#28AE8F',
    url: '/about',
    title: 'Consulta médica'
  },
  {
    id: 2,
    type: '',
    background: '#4D4898',
    url: '/about',
    title: 'Certificado de viaje'
  },
  {
    id: 3,
    type: '',
    background: '#8C9933',
    url: '/about',
    title: 'Laboratorio'
  },
  {
    id: 4,
    type: '',
    background: '#E72B60',
    url: '/about',
    title: 'Emergencia'
  },
]

const Home = () => (
  <Layout>
    <ProfileComponent />
    <Schedule />
    <Services items={items} />
  </Layout>
);

export default Home;
