// components/Navbar.js
import { useBreakpoint } from "@/hooks/useResponsive.js";
import React from "react";
import Logo from "./logo.js";

const Navbar = () => {
  let dinamicClass = useBreakpoint();
  return (
    <>
      <nav className={`nav-${dinamicClass}`}>
        {/* Puede resivir parametro para estableser el width. Siempre se espera un sitring como "100%" o "50%" */}
        <div className="conteiner-logo">
          <a href="/">
            <Logo keepSize="100%" />
          </a>
        </div>
        <div className={`conteiner-ul ${dinamicClass}`}>
          <ul>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
            <li>
              <a href="/reservas">Reservas</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/">Carrito</a>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        *{
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        nav {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          height: 8vh;
          background: black;
          padding: 0.5rem 1.5rem;
          }
          // Responsive
         .nav-sm, .nav-md {
          height: 5vh;
          padding: 0.5rem 1rem;
        }

        .conteiner-ul{
          display:flex;
          align-items: center;
        }
        
        .conteiner-ul ul {
          display: flex;
          column-gap: 5vh;
          list-style-type: none;
          font-size: 1rem;// Cambia el tamaño de las letras de las etiquetas <a>
          }
          // Responsive 
          .sm ul{
            column-gap: 1vh;
            font-size: 0.8rem;
          }

         /* estilos de la lista del menu con hover */
           .conteiner-ul ul li a {
         text-decoration: none; /* Sin subrayado */
         color: white; /* Color predeterminado */
         transition: color 0.3s ease; /* Transición suave */
         }

         .conteiner-ul ul li a:hover {
         color: #ff6347; /* Cambia el color al pasar el cursor */
          }







      `}</style>
    </>
  );
};

export default Navbar;
