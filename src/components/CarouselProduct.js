import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";

const CarouselProduct = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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

  return (
    <>
      <div>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="targeta">
            <img src="/images/ImagenCarrusel1.jpg" alt="Imagen 1" />
          </div>
          <div className="targeta">
            <img src="/images/ImagenCarrusel2.jpg" alt="Imagen 2" />
          </div>
          <div className="targeta">
            <img src="/images/ImagenCarrusel3.jpg" alt="Imagen 3" />
          </div>
          <div className="targeta">
            <img src="/images/ImagenCarrusel4.jpg" alt="Imagen 4" />
          </div>
        </Carousel>
      </div>
      <style jsx>{`
        .targeta {
          display: flex;
          justify-content: center;
          align-items: center;
          background: none;
          margin: 20px;
          overflow: hidden;
          height: 250px; /* Altura fija para todas las tarjetas */
          
        }

        .targeta img {
          width: 300%; /* Ajusta el ancho al contenedor */
          height: 200%; /* Ajusta la altura al contenedor */
          object-fit: cover; /* Recorta y ajusta la imagen sin deformarla */
          
        }
      `}</style>
    </>
  );
};

export default CarouselProduct;
