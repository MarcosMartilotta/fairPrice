import { useState } from "react";
import Hamburguer from "./Hamburguer";
import { NavStyled } from "../styled-components/styledNavbar";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <NavStyled onClick={handleClick}>
      <div className={`links-container ${!clicked ? "" : "active"}`}>
        <ul className={!clicked ? "" : "active"}>
          <li>Inicio</li>
          <li>Estadísticas</li>
          <li>Tutoriales</li>
          <li>Alquileres convenientes</li>
          <li>Sobre nosotros</li>
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
