import Image from "next/image";
import React from "react";
import Presentacion from "./Presentacion";

const HomePortada = () => {
  return (
    <>
      <section>
        <div className="image-container">
          <Image
            src="/images/fondoHome.jpg"
            alt="Imagen Fondo"
            layout="responsive"
            width={1920}
            height={1080}
          />
          
          <div className="elemento-conteiner">
            <h1><Presentacion/> </h1>
          </div>
        </div>
      </section>

      <style jsx>{`
        section {
          width: 100%;
          height: auto;
          overflow: hidden;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: auto;
        }

        .elemento-conteiner {
          position: absolute;
          top: 50%; /* Centrado vertical */
          left: 50%; /* Centrado horizontal */
          transform: translate(-50%, -50%); /* Ajusta para centrar el texto */
          color: white; /* Color de la frase */
          font-size: 2rem; /* Tamaño de la frase */
          text-align: center;
          font-weight: bold; /* Resaltar el texto */
        }
      `}</style>
    </>
  );
};


export default HomePortada;


