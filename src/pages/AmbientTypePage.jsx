import React from "react";
import { StyledAmbientsTypePage } from "../styled-components/styledAmbientsTypePage";
import { useNavigate } from "react-router-dom";
const AmbientTypePage = () => {
  const navigate = useNavigate();

  const changeRoute = (route) => {
    navigate(route);
  };
  return (
    <StyledAmbientsTypePage>
      <div className="hero">
        <h2>¿Que tipo de propiedad busca?</h2>
      </div>
      <button onClick={() => changeRoute("/questionnarie/budget")}>PH</button>
      <button onClick={() => changeRoute("/questionnarie/budget")}>
        Departamento
      </button>
      <button onClick={() => changeRoute("/questionnarie/budget")}>Casa</button>
    </StyledAmbientsTypePage>
  );
};

export default AmbientTypePage;
