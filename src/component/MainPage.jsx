import React, { useState } from "react";
import img1 from '../img/RECETA2.jpg';
import img2 from '../img/RECETA3.jpg';
import img3 from '../img/RECETA4.jpg';
import img4 from '../img/RECETA5.jpg';
import img5 from '../img/RECETA6.jpg';
import img6 from '../img/RECETA7.jpg';
import { styles } from "../service/style";
const MainPage = ({stock =10, initial=1,onAdd}) => {
    const [count, setCount] = useState(initial);

  // Funciones para incrementar y decrementar
  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
    return (
        <>
            <div className='container'>
                <div className="card">
                    <img src={img1} alt="Plato 1" />
                    <h3>Plato 1</h3>
                    <div style={styles.container}>
                        <h2 style={styles.title}>Plato 1</h2>

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
                        <button style={styles.addButton} onClick={() => onAdd(count)}>
                            Agregar al carrito
                        </button>
                    </div>
                    <p>Descripción breve del plato 1.</p>
                </div>
                <div className="card">
                    <img src={img2} alt="Plato 2" />
                    <h3>Plato 2</h3>
                    <div style={styles.container}>
                        <h2 style={styles.title}>Plato 1</h2>

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
                        <button style={styles.addButton} onClick={() => onAdd(count)}>
                            Agregar al carrito
                        </button>
                    </div>
                    <p>Descripción breve del plato 2.</p>
                </div>
                <div className="card">
                    <img src={img3} alt="Plato 3" />
                    <h3>Plato 3</h3>
                    <div style={styles.container}>
                        <h2 style={styles.title}>Plato 1</h2>

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
                        <button style={styles.addButton} onClick={() => onAdd(count)}>
                            Agregar al carrito
                        </button>
                    </div>
                    <p>Descripción breve del plato 3.</p>
                </div>
                <div className="card">
                    <img src={img4} alt="Plato 4" />
                    <h3>Plato 4</h3>
                    <div style={styles.container}>
                        <h2 style={styles.title}>Plato 1</h2>

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
                        <button style={styles.addButton} onClick={() => onAdd(count)}>
                            Agregar al carrito
                        </button>
                    </div>
                    <p>Descripción breve del plato 4.</p>
                </div>
                <div className="card">
                    <img src={img5} alt="Plato 5" />
                    <h3>Plato 5</h3>
                    <div style={styles.container}>
                        <h2 style={styles.title}>Plato 1</h2>

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
                        <button style={styles.addButton} onClick={() => onAdd(count)}>
                            Agregar al carrito
                        </button>
                    </div>
                    <p>Descripción breve del plato 5.</p>
                </div>
                <div className="card">
                    <img src={img6} alt="Plato 6" />
                    <h3>Plato 6</h3>
                    <div style={styles.container}>
                        <h2 style={styles.title}>Plato 1</h2>

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
                        <button style={styles.addButton} onClick={() => onAdd(count)}>
                            Agregar al carrito
                        </button>
                    </div>
                    <p>Descripción breve del plato 6.</p>
                </div>
            </div>
        </>
    )
}

export default MainPage;