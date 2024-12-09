import { useBreakpoint, useResponsiveScale } from "@/hooks/useResponsive.js";
import React from "react";
import Logo from "./logo.js";
import CarouselProduct from "./CarouselProduct.js";

const Presentacion = () => {
  let dinamicClass = useBreakpoint();

  return (
    <>
      <div className={`container ${dinamicClass}`}>
        <div className={"logo-container"}>
          <Logo />
          
        </div>

        <div className={"welcome-text"}>
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
        <CarouselProduct />
        
      </div>
      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10vh 0;
          justify-content: space-between;
          height:92vh;
        }
          .sm {
            font-size: 0.8rem;
          }

        .logo-container {
          display: flex;
          width: 80%;
          justify-content: end;
        }

        .welcome-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 75%;
        }

        h2, p {
          padding-top: 1vh;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Presentacion;
