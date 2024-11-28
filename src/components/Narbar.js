// components/Navbar.js
import React from "react";
import Logo from "./logo";
import Link from "next/link";


const Navbar = () => {
  return (
    <>
      
      
      
      
         
      <nav>

        <Logo/>
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

       
        nav {
          background-color: black;
          padding:1rem;
        }
        ul {
          list-style: none;
          display: flex;
          justify-content: flex-end;
          margin: 0;
          padding: 0;
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
          color:red;
        }
      `}</style>
    </>
  );
};

export default Navbar;
