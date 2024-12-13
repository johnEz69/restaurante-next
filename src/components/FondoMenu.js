import React from "react";
import { CartProvider } from "@/cartContext/CartContext";
import CarouselProduct from "./CarouselProduct";

const FondoMenu = () => {
  return (
    <>
      
      <section className="seccion-img">
        <div className={"Servicios-text"}>
          <h2>Experiencia Gourmet</h2>
          <p>
            En Numen, apostamos por experiencias únicas para todos los instantes
            del día. ¡Elige la opción que se adapte a tu personalidad!
          </p>

        </div>
      </section>
    
      <style jsx>{`
        .seccion-img {
          background-image: url("/images/ImagenMenu.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
          width: 100vw; /* Asegura el ancho completo del viewport */
          height: 92vh; /* Ocupa todo el alto del viewport */
        }

        .Servicios-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 20px; /* Añadir padding para dispositivos pequeños */
        }

        h2 {
          color: white;
          opacity: 0; /* Inicia invisible */
          transform: scale(0.8); /* Empieza más pequeño */
          animation: zoomIn 3.5s ease-out forwards; /* Animación */
          text-align: center; /* Centrar texto */
          font-size: 5vw; /* Usar unidades relativas para ser responsivo */
          line-height: 1.5;
        }

        p {
          color: white;
          opacity: 0; /* Inicia invisible */
          transform: scale(0.8); /* Empieza más pequeño */
          animation: zoomIn 3.5s ease-out forwards; /* Animación */
          text-align: center; /* Centrar texto */
          font-size: 1.5vw; /* Usar unidades relativas para ser responsivo */
          line-height: 1.5;
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Añadir estilos responsivos */
        @media (max-width: 768px) {
          h2 {
            font-size: 8vw; /* Ajustar tamaño del texto para dispositivos más pequeños */
          }

          p {
            font-size: 3vw; /* Ajustar tamaño del texto para dispositivos más pequeños */
          }

          .seccion-img {
            height: 50vh; /* Ajustar altura para dispositivos más pequeños */
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 10vw; /* Ajustar tamaño del texto para dispositivos muy pequeños */
          }

          p {
            font-size: 4vw; /* Ajustar tamaño del texto para dispositivos muy pequeños */
          }

          .seccion-img {
            height: 40vh; /* Ajustar altura para dispositivos muy pequeños */
          }
        }
      `}</style>
    </>
  );
};

export default FondoMenu;
