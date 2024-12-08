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
            height: 50vh;
        }

      `}</style>
    </>
  );
};


export default HomePortada;


