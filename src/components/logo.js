import { useResponsiveScale } from "@/hooks/useResponsive";

const Logo = ({ keepSize = null }) => {

  // Si keepsize no se asigna 
  let dSize = keepSize ? keepSize : useResponsiveScale(250) 

  return (
    <>
      <img
        src="/images/RESTOAcademy.png"
        alt={"Logotipo"}
        style={{ height: dSize }}
      />
    </>
  );
};

export default Logo;
