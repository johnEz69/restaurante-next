import React from "react";
import Presentacion from "./Presentacion";


const HomePortada = () => {
  return (
    <>
      <section className="seccion-img">
          
          <div>
            <h1><Presentacion/></h1>
          </div>
      </section>

      <style jsx>{`

        .seccion-img {
            background-image: url('/images/fondoHome.jpg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
            width: 100vw; /* Asegura el ancho completo del viewport */
            height: 92vh; /* Ocupa todo el alto del viewport */
        }

      `}</style>
    </>
  );
};


export default HomePortada;


