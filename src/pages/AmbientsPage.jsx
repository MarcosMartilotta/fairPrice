import { useContext } from "react";
import NavigateContext from "../context/navigateContext";
import { StyledAmbientsPage } from "../styled-components/styledAmbientsPage";

const AmbientsPage = () => {
  const { changeRoute } = useContext(NavigateContext);

  return (
    <StyledAmbientsPage>
      <div className="hero">
        <h2>¿Cuántos ambientes desea?</h2>
      </div>
      <button onClick={() => changeRoute("/questionnarie/type")}>
        Un ambiente
      </button>
      <button onClick={() => changeRoute("/questionnarie/type")}>
        Dos ambientes
      </button>
      <button onClick={() => changeRoute("/questionnarie/type")}>
        Tres ambientes
      </button>
      <button onClick={() => changeRoute("/questionnarie/type")}>
        Cuatro ambientes
      </button>
      <button onClick={() => changeRoute("/questionnarie/type")}>
        Cinco ambientes
      </button>
    </StyledAmbientsPage>
  );
};

export default AmbientsPage;
