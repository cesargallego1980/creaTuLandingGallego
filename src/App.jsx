//import { useState } from 'react'
//import { Navegacion } from './component/Navegacion';
//import { Container } from './component/Container';
import { Routes, Route } from 'react-router-dom';
import  Navbar2  from './component/Navbar2';
import  Home  from './pages/Home'
import  Componente404  from './pages/404'
import ContactForm from './pages/Contacto';
// import MapLocation from './pages/Ubicacion';
import MapEmbed from './pages/Ubicacion';
import AboutUs from './pages/Aboutus';
// import { VideoRating} from './component/VideoRating2';
//import  Videos from './component/Videos'
//import MainPage from "./component/MainPage";
import { Footer2 } from './component/Footer2';
import { Galeria } from './pages/Galeria';
import { Detalle } from './pages/Detalle'
import './App.css'


function App() {
  //ALERTA PARA CONTADOR

  return (
    <>
      <div className="App">
      <Navbar2 />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<ContactForm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/ubicacion" element={<MapEmbed />} />
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="*" element={<Componente404 />} />
        
      </Routes>
      <Footer2 />
    </div>

     
    </>
  )
}

export default App;
