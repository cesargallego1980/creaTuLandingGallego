import React from "react";
import nosotros from "../img/RECETA7.jpg";
import { useParams } from "react-router-dom";

import galeria_01 from "../img/RECETA1.jpg";
import galeria_02 from "../img/RECETA2.jpg";
import galeria_03 from "../img/RECETA3.jpg";
import galeria_04 from "../img/RECETA4.jpg";
import galeria_05 from "../img/RECETA5.jpg";
import galeria_06 from "../img/RECETA6.jpg";
import galeria_07 from "../img/RECETA7.jpg";


const images = [
  { src: galeria_01, id: 1,
    descripcion:"Plato Americano"
   },
  { src: galeria_02, id: 2,
      descripcion:"Ensalada con crema de espinaca"
   },
  { src: galeria_03, id: 3,
      descripcion:"Arroz al ajillo"
   },
  { src: galeria_04, id: 4,
      descripcion:"Crema de esparragos"
   },
  { src: galeria_05, id: 5,
      descripcion:"Crema de champiñones"
   },
  { src: galeria_06, id: 6,
      descripcion:"Frijoles salteados"
   },
  { src: galeria_07, id: 7,
      descripcion:"Berenjenas al vapor"
   },
  
];


export const Detalle = () => {
  const { id } = useParams();

  const imgSelected = images.find(f=>f.id == id);

  return (
    <main className="contenido-principal contenedor">
      <h2 className="text-center">Entrada Blog {id ? id : ""}</h2>

      <article className="entrada contenido-entrada-blog">
        <div className="imagen">
          <img src={imgSelected.src} alt="imagen blog" />
        </div>
        <div className="contenido-blog">
          <div className="entrada-meta">
            <p>
              Fecha: <span>8 de Febrero de 2025</span>
            </p>
            <p>
              Escrito por: <span>Cesar Gallego</span>
            </p>
          </div>
          <div className="entrada-blog">

            <p>
              {imgSelected.descripcion}
            </p>
            
          </div>
        </div>
      </article>
    </main>
  );
};
