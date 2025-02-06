import { createContext, useContext, useState } from "react";
const CarritoContext = createContext({ carrito: [] });

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]); //useState({ name: "Juan", isLoggedIn: true });

  const addCarrito = (producto)=>{
    let newCarrito = [
      ...carrito
    ];
    newCarrito.push(producto);
    setCarrito(newCarrito);
  }

  const eliminarCarrito = (index) =>{
    let newCarrito = [
      ...carrito
    ];
    console.log(index)
    newCarrito.splice(index, 1)
    setCarrito(newCarrito);
  }

  return (
    <CarritoContext.Provider value={{ carrito, addCarrito, eliminarCarrito }}>
      {children} {/* Renderiza los componentes hijos dentro del proveedor */}
    </CarritoContext.Provider>
  );
};
// Hook personalizado para consumir el contexto del usuario fácilmente.
export const useCarrito = () => useContext(CarritoContext)