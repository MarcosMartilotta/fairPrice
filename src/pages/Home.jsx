import { useContext } from "react";
import { StyledHome } from "../styled-components/syledHome";
import NavigateContext from "../context/navigateContext";

const Home = () => {
  const { changeRoute } = useContext(NavigateContext);

  return (
    <StyledHome>
      <section className="hero">
        <h1>El valor justo</h1>
      </section>
      <section className="questions">
        <button type="button" onClick={() => changeRoute("/statistics")}>
          Gráficos estadísticos
        </button>
        <button
          type="button"
          onClick={() => changeRoute("/questionnarie/ambients")}
        >
          Alquileres convenientes
        </button>
      </section>
    </StyledHome>
  );
};

export default Home;
