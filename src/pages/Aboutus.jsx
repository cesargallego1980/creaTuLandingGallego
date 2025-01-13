import React from 'react';

const AboutUs = () => {
    return (
        <>
            <div className="ContainerFoto">
                <div className="fotoA">
                    {/* <img src={img1} alt="Plato 3" /> */}
                </div>
            </div>
            <div
                style={{
                    maxWidth: '600px',
                    margin: '20px auto',
                    padding: '20px',
                    border: '2px solid #000',
                    borderRadius: '15px',
                    backgroundColor: '#fff',
                    fontFamily: 'Arial, sans-serif',
                    color: '#000',
                    textAlign: 'justify',
                }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '15px' }}>Acerca de Nosotros</h2>
                <p>
                    Bienvenidos a nuestro restaurante, un lugar donde la tradición y la creatividad se
                    unen para ofrecerte una experiencia culinaria única. Nos especializamos en combinar
                    sabores locales con técnicas modernas, siempre utilizando ingredientes frescos y de
                    alta calidad. Nuestro compromiso es brindarte un ambiente acogedor y un servicio
                    excepcional, para que cada visita sea inolvidable.
                </p>
            </div>
        </>

    );
};

export default AboutUs;
