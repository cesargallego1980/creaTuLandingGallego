import React from 'react';
import { Link } from 'react-router-dom';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/*import './Navbar.css';*/

function Navbar2() {
  return (
    <nav className="navbar">
      {/*<h1 className="logo">Mi Sitio</h1>*/}
     
      <div className='contenedor-menu'>
        <Link to="/">Inicio</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/about">Sobre Nosotros</Link>
        <Link to="/ubicacion">Ubicacion</Link>
        
      </div>
      
      
    </nav>
  );
}

export default Navbar2;
