import { useContext } from "react";
import NavigateContext from "../context/navigateContext";
import { StyledAmbientsTypePage } from "../styled-components/styledAmbientsTypePage";

const AmbientTypePage = () => {
  const { changeRoute } = useContext(NavigateContext);
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
