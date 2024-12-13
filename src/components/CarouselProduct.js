import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useCart } from "@/cartContext/CartContext";
import React from "react";

const CarouselProduct = () => {
  const { products, addToCart} = useCart();
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
      breakpoint: { max: 1024, min: 550 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
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
      <div className="container">
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
          removeArrowOnDeviceType={["mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {products.map((product) => (
            <div key={product.id} className="targeta">
              <img
                src={"/images/placeholder.jpg"} //src={`/images/${product.image}` || '/images/placeholder.jpg'}
                alt={product.name}
              />
              <div className="product-info p-2">
                <h3 className="text-lg ">{product.name}</h3>
                <p className="text-md">${product.price}</p>
              </div>
              <button onClick={() => addToCart(product)}>Comprar</button>
            </div>
          ))}
        </Carousel>
      </div>
      <style jsx>{`
        .container {
          padding: 0 5%;
        }

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
          transform: scale(1.04);
          box-shadow: 0px 4px 8px rgba(255, 0, 0, 0.3);
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
        .targeta button:active {
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
