import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hamburguer from "./Hamburguer";
import { NavStyled } from "../styled-components/styledNavbar";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const changeRoute = (route) => {
    navigate(route);
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
