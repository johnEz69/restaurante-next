import React from "react";
import Image from "next/image";
import styles from "./Contacto.module.css";

const FondoContactos = () => {
  return (
    <>
      <section className={styles.description}>
        <p>
          Numen, un lugar donde cada momento se convierte en una experiencia
          gourmet. Estamos aquí para acompañarte en todas las ocasiones del día,
          desde un desayuno lleno de sabores frescos, hasta una cena exquisita
          bajo una atmósfera única.
        </p>
        <p>
          Puedes realizar tu reserva en línea para asegurar tu lugar en nuestra
          mesa o consultar por nuestros servicios de catering y lunch para
          eventos especiales. Ya sea para una comida íntima o una gran
          celebración, estaremos encantados de ofrecerte un servicio a la altura
          de tus expectativas.
        </p>
      </section>

      <section className={styles.seccionImg}>
        <Image
          src="/images/fondoHomecopia.jpg"
          alt="Fondo Home"
          layout="fill"
          objectFit="cover"
          className={styles.backgroundImage}
        />
      </section>

      <section className={styles.contact} id="contact">
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image
                src="/images/aesthetic.jpg"
                alt="Aesthetic"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className={styles.right}>
            <h1>Deja tu consulta aquí:</h1>
            <form>
              <input type="text" placeholder="Nombre" required />
              <input type="text" placeholder="Apellido" required />
              <input type="email" placeholder="Correo electrónico" required />
              <input type="tel" placeholder="Número de celular" required />
              <textarea placeholder="Descripción" required></textarea>
              <button type="submit">Enviar</button>
            </form>

            <div className={styles.info}>
              <div className={styles.location}>
                <h2>Ubicación</h2>
                <p>Matanza 1234</p>
                <br />
                <p>Buenos Aires</p>
              </div>

              <div className={styles.social}>
                <h2>Redes sociales</h2>
                <div className={styles.socialmedia}>
                  <div className={styles.socialItem}>
                    <Image
                      src="/images/icons8-facebook-nuevo-50.png"
                      alt="Facebook"
                      width={50}
                      height={50}
                      className={styles.socialIcon}
                    />
                    <p>Resto Academy</p>
                  </div>
                  <div className={styles.socialItem}>
                    <Image
                      src="/images/icons8-instagram-64.png"
                      alt="Instagram"
                      width={50}
                      height={50}
                      className={styles.socialIcon}
                    />
                    <p>@academy.resto</p>
                  </div>
                  <div className={styles.socialItem}>
                    <Image
                      src="/images/icons8-twitterx-50.png"
                      alt="Twitter X"
                      width={50}
                      height={50}
                      className={styles.socialIcon}
                    />
                    <p>@restoacademy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FondoContactos;
