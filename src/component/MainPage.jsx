import React, { useState } from "react";
import img1 from '../img/RECETA2.jpg';
import img2 from '../img/RECETA3.jpg';
import img3 from '../img/RECETA4.jpg';
import img4 from '../img/RECETA5.jpg';
import img5 from '../img/RECETA6.jpg';
import img6 from '../img/RECETA7.jpg';
import Productos from "./Productos";

const Filter = ({ render }) => {
  // 1. useState para manejar el valor del input
  const [value, setValue] = useState("");

  // 2. Función para manejar cambios en el input y actualizar el estado
  const handleChange = (e) => setValue(e.target.value);

  return (
    <div>
      {/* 3. Input controlado que actualiza el estado "value" */}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Buscar..."
      />

      {/* 4. Renderiza lo que se pasa en la prop "render", enviándole el valor actual */}
      {render(value)}
    </div>
  );
};
const MainPage = () => {


  const handleAddToCart = (quantity) => {
    //alert(`Has agregado ${quantity} producto(s) al carrito`);
    Swal.fire(`Has agregado ${quantity} producto(s) al carrito`);
  };


  const product = [{
    img: img1,
    titulo: "Plato 1",
    titulo2: "Plato 1",
    descripcion: "Descripción breve del plato 1."
  },
  {
    img: img2,
    titulo: "Plato 2",
    titulo2: "Plato 2",
    descripcion: "Descripción breve del plato 2."
  },
  {
    img: img3,
    titulo: "Plato 3",
    titulo2: "Plato 3",
    descripcion: "Descripción breve del plato 3."
  },
  {
    img: img4,
    titulo: "Plato 4",
    titulo2: "Plato 4",
    descripcion: "Descripción breve del plato 4."
  },
  {
    img: img5,
    titulo: "Plato 5",
    titulo2: "Plato 5",
    descripcion: "Descripción breve del plato 5."
  },
  {
    img: img6,
    titulo: "Plato 6",
    titulo2: "Plato 6",
    descripcion: "Descripción breve del plato 6."
  }

  ]

  return (

    <>
   
   

      <Filter
        render={(filterValue) => (
          <div className="container">
            {product
              .filter((prod) =>
                prod.titulo.toLowerCase().includes(filterValue.toLowerCase())
              )
              .map((producto, index) => (

                <Productos stock={10} initial={1} onAdd={handleAddToCart}
                  img={producto.img}
                  key={index}
                  titulo={producto.titulo}
                  titulo2={producto.titulo2}
                  descripcion={producto.descripcion} />
              ))}
          </div>
        )}
      />



    </>
  )
}

export default MainPage;