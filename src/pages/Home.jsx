import { StyledHome } from "../styled-components/syledHome";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const changeRoute = (route) => {
    navigate(route);
  };

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
