import React from 'react';
import welcomeImage from '../../assets/welcome image/perrofachero.png';  // Asegúrate que la ruta es correcta
import './Main.css';  

const Main = ({ title }) => {
  return (
    <main className="main-content">
      <h1>{title}</h1>
      <div className="image-container">
        <a href="https://www.bcn.cl/portal/leyfacil/recurso/prohibicion-de-la-experimentacion-en-animales-en-la-elaboracion-de-productos-cosmeticos/">
        <img src={welcomeImage} alt="Bienvenido" className="welcome-image" />
        </a>
      </div>
      <p>Tienda Online — Comprá con nosotros y garantizá calidad para tus mascotas. Hacemos envíos a todo el país. Promociones Imperdibles Online. Promociones Bancarias. Comprá Online, Rápido y Seguro. Dog Chow. Old Prince. Marcas: Sieger, Pro Plan, Fawna, Old Prince, Excellent.</p>
    </main>
  );
};

export default Main;
