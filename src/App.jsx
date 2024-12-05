import { useState } from 'react'
import { Navegacion } from './component/Navegacion';
import MainPage from "./component/MainPage"
import './App.css'


function App() {
  //ALERTA PARA CONTADOR
  const handleAddToCart = (quantity) => {
    alert(`Has agregado ${quantity} producto(s) al carrito`);
  };
  return (
    <>

      <Navegacion/>
      
      <MainPage stock={10} initial={1} onAdd={handleAddToCart}/> 
    </>
  )
}

export default App
