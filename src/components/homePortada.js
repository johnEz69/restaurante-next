import React from "react";
import Presentacion from "./Presentacion";
import CarouselProduct from "./CarouselProduct";
import { CartProvider } from "@/cartContext/CartContext";

const HomePortada = () => {
  return (
    <>
      <section className="seccion-img">
        <div>
          <h1>
            <Presentacion />
          </h1>
        </div>
      </section>

      <div className="seccion-carrusel">
        <h2>
          <CartProvider>
            <CarouselProduct />
          </CartProvider>
        </h2>
      </div>

      <style jsx>{`
        .seccion-img {
          background-image: url("/images/fondoHome.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
          width: 100vw; /* Asegura el ancho completo del viewport */
          height: 92vh; /* Ocupa todo el alto del viewport */
        }

        .seccion-carrusel {
          background-color: black;
        }
      `}</style>
    </>
  );
};

export default HomePortada;
