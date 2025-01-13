import React from 'react';

const MapEmbed = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', textAlign: 'center' }}>
      <h2>Nuestra Ubicación</h2>
      <div
        style={{
          width: '100%',
          height: '400px',
          border: '2px solid #000',
          borderRadius: '15px',
          overflow: 'hidden',
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.975933065876!2d-75.6375!3d6.0892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e441d1c6d4b0001%3A0x0!2zQ2FsbGUgMTMwIFN1ciAjIDU3LTIzLCBDYWxkYXMsIEFudGlvcXVpYQ!5e0!3m2!1ses!2sco!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  );
};

export default MapEmbed;
