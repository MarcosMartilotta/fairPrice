import { useState, useContext } from "react";
import NavigateContext from "../context/navigateContext";
import Hamburguer from "./Hamburguer";
import { NavStyled } from "../styled-components/styledNavbar";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const { changeRoute } = useContext(NavigateContext);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <NavStyled onClick={handleClick}>
      <div className={`links-container ${!clicked ? "" : "active"}`}>
        <ul className={!clicked ? "" : "active"}>
          <li onClick={() => changeRoute("/")}>Inicio</li>
          <li onClick={() => changeRoute("/statistics")}>Estadísticas</li>
          <li onClick={() => changeRoute("/questionnarie/results")}>
            Alquileres convenientes
          </li>
          <li onClick={() => changeRoute("/tuttorials")}>Tutoriales</li>
          <li onClick={() => changeRoute("/ourmission")}>Nuestra misión</li>
        </ul>
      </div>
      <Hamburguer
        className="hamburguer"
        clicked={clicked}
        handleClick={handleClick}
      />
      <div className={`background-nav ${!clicked ? "" : "active"}`}></div>
    </NavStyled>
  );
};

export default NavBar;
