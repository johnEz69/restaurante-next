import React from "react";
import Logo from "./logo.js";

const Presentacion = () => {
  return (
    <>
      <div className="container">
        <div className="logo-container">
          <Logo />
        </div>

        <div className="welcome-text">
          <h2>Bienvenidos a Numen</h2>
          <p>
            En Numen, te ofrecemos más que café: una experiencia única con
            sabores exóticos. Disfruta de nuestro café de calidad y acompáñalo
            con opciones gastronómicas únicas, inspiradas en recetas de todo el
            mundo. Desde dulces exóticos hasta platos salados innovadores, cada
            bocado es una aventura para tu paladar. Ven a descubrir un rincón
            donde la creatividad y el buen gusto se encuentran. ¡Te esperamos!
          </p>
        </div>
      </div>
      <style jsx>
        {`
        // Falta crear clases del responsive con ResponsiveContextProvider
          @media (max-width: 600px) {
            .logo img {
              width: 50px; /* Tamaño para móviles */
            }
            .welcome-text {
              font-size: 10px;
              width: 400px;
            }
          }

          @media (min-width: 601px) and (max-width: 1200px) {
            .logo img {
              width: 100px; /* Tamaño para tabletas */
            }
            .welcome-text {
              font-size: 12px;
            }
          }

          @media (min-width: 1201px) {
            .logo img {
              width: 150px; /* Tamaño para escritorio */
            }
            .welcome-text {
              font-size: 16px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Presentacion;
