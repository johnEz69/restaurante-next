import React from 'react'
import Image from 'next/image'

const Presentacion = () => {
  return (
    <>
    <div className="Conteiner-padre">


      <div className="Contenedor-logo-portada">
      <Image
          src="/images/logo.png"
          alt="imagen logo"
          width={70}
          height={70}
        />
      </div>

      <div className="Presentacion">
       <h2>Bienvenidos a Numen</h2>
       <p>

En Numen, te ofrecemos más que café: una experiencia única con sabores exóticos. Disfruta de nuestro café de calidad y acompáñalo con opciones gastronómicas únicas, inspiradas en recetas de todo el mundo. Desde dulces exóticos hasta platos salados innovadores, cada bocado es una aventura para tu paladar.

Ven a descubrir un rincón donde la creatividad y el buen gusto se encuentran. ¡Te esperamos!</p>
     
      </div>
     




      







      
    </div>
     <style jsx>{`


         .Conteiner-padre{
        
        }
        
         .Contenedor-logo-portada{
            width:1rem;
            height:2rem;
           
            
          }    
        
       
        
        
        .Presentacion{
        
         
        
        }
        
        
        
        
        
        
        
        
        
        `}
       </style>




</>


  )
}






export default Presentacion

