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
    <NavStyled /* onClick={handleClick} */>
      <div className={`links-container ${!clicked ? "" : "active"}`}>
        <ul className={!clicked ? "" : "active"}>
          <li
            onClick={() => {
              setClicked(!clicked);
              changeRoute("/");
            }}
          >
            Inicio
          </li>
          <li
            onClick={() => {
              setClicked(!clicked);
              changeRoute("/statistics");
            }}
          >
            Estadísticas
          </li>
          <li
            onClick={() => {
              setClicked(!clicked);
              changeRoute("/questionnarie/results");
            }}
          >
            Alquileres convenientes
          </li>
          <li
            onClick={() => {
              setClicked(!clicked);
              changeRoute("/tuttorials");
            }}
          >
            Tutoriales
          </li>
          <li
            onClick={() => {
              setClicked(!clicked);
              changeRoute("/ourmission");
            }}
          >
            Nuestra misión
          </li>
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
