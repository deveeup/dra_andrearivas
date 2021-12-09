import React from 'react';
import Header from '../header/index';
import Footer from '../footer/index';
import './index.scss';

const Layout = (props) => (
  <div className="Layout">
    <Header />
      {props.children}
    <Footer />
  </div>
);

export default Layout;


