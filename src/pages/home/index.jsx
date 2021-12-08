import React from 'react';
import Layout from '../../components/layout/index';
import Services from '../../components/services/index';
import ProfileComponent from '../../components/profileInfo';

const items = [
  {
    type: '',
    background: '#28AE8F',
    url: '/about',
    title: 'Consulta médica'
  },
  {
    type: '',
    background: '#4D4898',
    url: '/about',
    title: 'Certificado de viaje'
  },
  {
    type: '',
    background: '#8C9933',
    url: '/about',
    title: 'Laboratorio'
  },
  {
    type: '',
    background: '#E72B60',
    url: '/about',
    title: 'Emergencia'
  },
]

const Home = () => (
  <Layout>
    <ProfileComponent />
    <Services items={items} />
  </Layout>
);

export default Home;
