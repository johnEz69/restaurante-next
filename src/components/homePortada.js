import Image from "next/image";
import React from "react";

const HomePortada = () => {
  return (
    <>
      <section>
        <Image
          src="/images/fondoHome.jpg"
          alt="Imagen Fondo"
          layout="responsive"
          width={1920}
          height={1080}
        />
      </section>
      <style jsx>{`
        section {
          width: 100%;
          height: auto;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default HomePortada;


