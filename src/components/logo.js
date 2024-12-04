import { useContext } from "react";
import { responsiveContext }  from "@/context/responsiveContextProvider";

const Logo = ({ keepSize = "100%" }) => {

  let widthWindows = useContext(responsiveContext)

  return (
    <img
      src="/images/RESTOAcademy.png"
      alt={"Logotipo"}
      style={{ width: keepSize, height: "auto" }}
      className={widthWindows}
    />
  );
};

export default Logo;
