// components/Services.js
import Image from 'next/image';
import styles from './Servicios.module.css';
const Servicios = () => {
  return (
    <section id="services" className={styles.services}>
     
      <div className={styles.container}>
        <div className={styles.list}>
          <div className={styles.card}>
            <div className={styles.title}>
              <div className={styles.number}>01</div>
              DESAYUNO
            </div>
            <p>
            Comienza tu día con energía. Disfruta de nuestras opciones de desayuno, 
            diseñadas para aportarte la nutrición y 
            el sabor que necesitas para arrancar con fuerza.
            </p>
            <a href="#">Saber más</a>
          </div>

          <div className={styles.card}>
            <div className={styles.title}>
              <div className={styles.number}>02</div>
              ALMUERZO
            </div>
            <p>
            Recarga tus energías al mediodía. 
            Ofrecemos almuerzos deliciosos y equilibrados, 
            perfectos para mantenerte activo durante el resto del día.            
            </p>
            <a href="#">Saber más</a>
          </div>

          <div className={styles.card}>
            <div className={styles.title}>
              <div className={styles.number}>03</div>
              MERIENDA
            </div>
            <p>
            La pausa perfecta para la tarde. Relájate y 
            disfruta de una merienda ligera y sabrosa, 
            ideal para compartir con amigos o disfrutar en solitario.            
            </p>
            <a href="#">Saber más</a>
          </div>

          <div className={styles.card}>
            <div className={styles.title}>
              <div className={styles.number}>04</div>
              CENA
            </div>
            <p>
            Nuestras cenas ofrecen una amplia variedad de platos,
            desde opciones ligeras hasta comidas contundentes,
            perfectas para una velada especial o una noche tranquila.          
            </p>
            <a href="#">Saber más</a>
          </div>

          <div className={styles.card}>
            <div className={styles.title}>
              <div className={styles.number}>05</div>
              EJECUTIVO
            </div>
            <p>
            Elegancia y rapidez en tu pausa laboral. Nuestro menú ejecutivo combina platos 
            con un servicio ágil, ideal para tus reuniones de negocios o 
            para un almuerzo rápido pero delicioso.            </p>
            <a href="#">Saber más</a>
          </div>

          <div className={styles.card}>
            <div className={styles.title}>
              <div className={styles.number}>06</div>
              BRUNCH
            </div>
            <p>
            La fusión perfecta entre el desayuno y el almuerzo. Disfruta de un brunch variado,
            con opciones dulces y saladas que harán de tu fin de semana una experiencia memorable.            </p>
            <a href="#">Saber más</a>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Servicios;