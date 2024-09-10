import React from 'react';
import './Footer.css';
import logo from '../../assets/logo/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <nav>
        <ul>
          <li><a href="#privacy">Politica de privacidad</a></li>
          <li><a href="#terms">Terminos y servicios</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
