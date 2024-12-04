// components/Navbar.js
import React from "react";
import Logo from "./logo.js";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
      {/* Puede resivir parametro para estableser el width. Siempre se espera un sitring como "100%" o "50%" */}
      <div className="conteiner-logo">
        <Logo keepSize="15%" /> 
      </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/reservas">Reservas</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/contacto">Contactos</a>
          </li>
        </ul>
      </nav>

      <style jsx>{`

      .conteiner-logo{
      position: fixed;
      }
        
        nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #333;
          padding: 10px 0;
          z-index: 1000;
          background-color: black;
          padding: 1rem;
        }
        ul {
          list-style: none;
          display: flex;
          justify-content: flex-end;
          margin: 0;
          padding: 0;
          margin-right: 100px; /* Ajusta este valor para mover la lista hacia la izquierda */
        }

        li {
          margin: 0 1rem; /* Añade espacio entre los elementos de la lista */
        }
        a {
          color: white;
          text-decoration: none;
          font-size: 1.2rem;
        }
        a:hover {
          color: red;
        }
      `}</style>
    </>
  );
};

export default Navbar;
