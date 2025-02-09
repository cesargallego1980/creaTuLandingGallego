import React from "react";
import { Link } from "react-router-dom";
import galeria_01 from "../img/RECETA1.jpg";
import galeria_02 from "../img/RECETA2.jpg";
import galeria_03 from "../img/RECETA3.jpg";
import galeria_04 from "../img/RECETA4.jpg";
import galeria_05 from "../img/RECETA5.jpg";
import galeria_06 from "../img/RECETA6.jpg";
import galeria_07 from "../img/RECETA7.jpg";


const images = [
  { src: galeria_01, id: 1 },
  { src: galeria_02, id: 2 },
  { src: galeria_03, id: 3 },
  { src: galeria_04, id: 4 },
  { src: galeria_05, id: 5 },
  { src: galeria_06, id: 6 },
  { src: galeria_07, id: 7 },
  
];

export const Galeria = () => {
  return (
    <main className="contenido-principal contenedor">
      <div>
      <h2 className="text-center">Galería</h2>
      </div>

      <div>
      <ul className="galeria">
        {images.map((image) => (
          <li key={image.id}>
            {/* Redirige a /detalle/:id */}
            <Link to={`/detalle/${image.id}`}>
              <img src={image.src} alt={`Imagen ${image.id}`} />
            </Link>
          </li>
        ))}
      </ul>
      </div>
 

    
    </main>
  );
};
