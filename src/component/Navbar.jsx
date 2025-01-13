import React from 'react';
import { Link } from 'react-router-dom';

/*import './Navbar.css';*/

function Navbar() {
  return (
    <nav className="navbar">
      {/*<h1 className="logo">Mi Sitio</h1>*/}
     
      <div className='contenedor-menu'>
        <Link to="/">Inicio</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/about">Sobre Nosotros</Link>
        <Link to="/cronograma">Cronograma</Link>
        <Link to="/poetas">Poetas</Link>
      </div>
      {/*
        <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/about">Sobre Nosotros</Link></li>
      </ul>*/
      }
      
    </nav>
  );
}

export default Navbar;
