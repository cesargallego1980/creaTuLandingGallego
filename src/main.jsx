import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './context/UserContext.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <UserProvider>
        <CarritoProvider>
        <BrowserRouter>
    <App />
    </BrowserRouter>
        </CarritoProvider>
    </UserProvider>
  </StrictMode>,
)
