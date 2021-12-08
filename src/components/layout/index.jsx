import React from 'react';
import Header from '../header/index';
import Footer from '../footer/index';

const Layout = (props) => (
  <div>
    <Header />
      {props.children}
    <Footer />
  </div>
);

export default Layout;


