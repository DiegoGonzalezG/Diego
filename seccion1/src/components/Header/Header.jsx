import React from 'react';
import './Header.css';
import logo from '../../assets/logo/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <nav>
        <ul className="menu">
          <li><a href="https://www.latercera.com/noticia/cholito-una-victima-del-maltrato-animal/">Menu</a></li>
          <li><a href="https://chilemestizo.cl/fundacion/">Acerca de</a></li>
          <li><a href="https://www.natural-life.com.ar/perros/alimentos/secos/">Servicios</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
