import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";

const CarouselProduct = () => {
  const [isHovered, setIsHovered] = useState(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={!isHovered}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[/*"tablet",*/ "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="targeta">
            <img src="/images/ImagenCarrusel1.jpg" alt="Imagen 1" />
            <button>Comprar</button>
          </div>
          <div className="targeta">
            <img src="/images/ImagenCarrusel2.jpg" alt="Imagen 2" />
            <button>Comprar</button>
          </div>
          <div className="targeta">
            <img src="/images/ImagenCarrusel3.jpg" alt="Imagen 3" />
            <button>Comprar</button>
          </div>
          <div className="targeta">
            <img src="/images/ImagenCarrusel4.jpg" alt="Imagen 4" />
            <button>Comprar</button>
          </div>
        </Carousel>
      </div>
      <style jsx>{`
      
        // targeta
        .targeta {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          background: none;
          margin: 5vh 10px;
          overflow: hidden;
          height: 250px; /* Altura fija para todas las tarjetas */
          transition: 0.5s;
        }
        .targeta:hover {
          border-radius: 1rem;
          transform: scale(1.05);
          box-shadow: 0px 4px 8px rgba(255, 0, 0, 0.2);
        }
          
        // Boton
        .targeta button {
          // Posicion
          position: absolute;
          bottom: 5%;
          right: 10%;
          opacity: 0;
          transition: opacity 0.3s, transform 0.3s, box-shadow 0.3s;

          // Estilo
          padding: 0.5vh 2vh;
          border: none;
          background: red;
          border-radius: 1rem;
        }
        .targeta button:active{
          background: rgb(136, 8, 8);
          border: red;
        }
        .targeta:hover button {
          opacity: 1;
        }

        // imagen
        .targeta img {
          width: 100%; /* Ajusta el ancho al contenedor */
          height: 100%; /* Ajusta la altura al contenedor */
          object-fit: cover; /* Recorta y ajusta la imagen sin deformarla */
        }
      `}</style>
    </>
  );
};

export default CarouselProduct;