import React from "react";
import Image from "next/image"; 
import styles from "./footer.module.css"; 

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.sb__footer}>
        <div className={styles.sb__footer_links}>
          <div className={styles.sb__footer_links_div}>
            <h4>Numen Bussines</h4>
            <a href="/employer">
              <p>Reservaciones</p>
            </a>
            <a href="/employer">
              <p>Consultas</p>
            </a>
            <a href="/employer">
              <p>Contratos</p>
            </a>
          </div>
          <div className={styles.sb__footer_links_div}>
            <h4>Recursos</h4>
            <a href="/recurso">
              <p>Catering</p>
            </a>
            <a href="/recurso">
              <p>Servicio Lunch</p>
            </a>
            <a href="/recurso">
              <p>Especiales</p>
            </a>
          </div>
          <div className={styles.sb__footer_links_div}>
            <h4>Reservas</h4>
            <a href="/employer">
              <p>Agenda</p>
            </a>
          </div>
          <div className={styles.sb__footer_links_div}>
            <h4>Compañía</h4>
            <a href="/about">
              <p>Organización</p>
            </a>
            <a href="/rrhh">
              <p>Recursos Humanos</p>
            </a>
            <a href="/contact">
              <p>Contacto</p>
            </a>
          </div>
          <div className={styles.sb__footer_links_div}>
            <h4>Redes sociales</h4>
            <div className={styles.socialmedia}>
              <p>
                <Image
                  src="/images/icons8-facebook-nuevo-50.png" alt="Facebook" width={50} height={50} className={styles.socialIcon}/>
              </p>
              <p>
                <Image
                  src="/images/icons8-instagram-64.png" alt="Instagram"  width={50} height={50} className={styles.socialIcon}/>
              </p>
              <p>
                <Image
                  src="/images/icons8-twitterx-50.png" alt="Twitter X" width={50} height={50} className={styles.socialIcon}/>
              </p>
              <p>
                <Image
                  src="/images/icons8-tik-tok-50.png" alt="TikTok" width={50} height={50} className={styles.socialIcon}/>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.sb__footer_image_center}> 
          <Image src="/images/RESTOAcademy.png" alt="RESTO Academy" width={200} height={100} 
          className={styles.footerImage}/> 
        </div>

        <div className={styles.sb__footer_below}>
          <div className={styles.sb__footer_copyright}>
            <p>
              @{new Date().getFullYear()} Resto Academy Numen. Todos los derechos reservados.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
