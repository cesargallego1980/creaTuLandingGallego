import React, { useState } from "react";
import { styles } from "../service/style";
const Productos = ({stock =10, initial=1,onAdd, img, titulo,titulo2,descripcion}) => {
    const [count, setCount] = useState(initial);
        // Funciones para incrementar y decrementar
    const handleIncrement = () => {
                if (count < stock) {
                    setCount(count + 1);
                }
    };

    const handleDecrement = (type) => {
                if (count > 1) {
                    setCount(count - 1);
                }
    };

    return (
        <>
         <div className="card">
                    <img src={img} alt={titulo} />
                    <h3>{titulo}</h3>
                    <div style={styles.container}>
                        <h2 style={styles.title}>{titulo2}</h2>

                        <div style={styles.counterContainer}>
                            {/* Botón de Decrementar */}
                            <button

                                style={{
                                    ...styles.button,
                                    ...(count === 1 ? styles.disabledButton : {}),
                                }}
                                onClick={handleDecrement}
                                disabled={count === 1}
                            >
                                -
                            </button>

                            {/* Contador */}
                            <span style={styles.counter}>{count}</span>

                            {/* Botón de Incrementar */}
                            <button
                                style={{
                                    ...styles.button,
                                    ...(count === stock ? styles.disabledButton : {}),
                                }}
                                onClick={handleIncrement}
                                disabled={count === stock}
                            >
                                +
                            </button>
                        </div>

                        {/* Botón de Agregar al carrito */}
                        <button style={styles.addButton} onClick={() => onAdd(count,img,titulo )}>
                            Agregar al carrito
                        </button>
                    </div>
                    <p>{descripcion}</p>
                </div>
        </>
    )

}
export default Productos;