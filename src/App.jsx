import { useState } from 'react'
import { Navegacion } from './component/Navegacion';
import { Container } from './component/Container';
import MainPage from "./component/MainPage"
import { Footer2 } from './component/Footer2'
import './App.css'


function App() {
  //ALERTA PARA CONTADOR

  return (
    <>

      <Navegacion/>
      <Container/>
      <MainPage/>
      
      <Footer2/>
    </>
  )
}

export default App;
