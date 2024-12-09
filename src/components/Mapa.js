// components/mapa.js
import React from 'react';

const Mapa = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5602586907493!2d144.95592341531655!3d-37.81720917975156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4efc4c3b9b%3A0x5e4f5c0b8706e5c6!2sFederation%20Square%2C%20Melbourne%20VIC%200300%2C%20Australia!5e0!3m2!1ses!2sus!4v1636569077255!5m2!1ses!2sus"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Mapa;
