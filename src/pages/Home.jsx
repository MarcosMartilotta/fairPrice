import { useContext } from "react";
import { StyledHome } from "../styled-components/syledHome";
import NavigateContext from "../context/navigateContext";
import titleShape from "../assets/titleShape.svg";

const Home = () => {
  const { changeRoute } = useContext(NavigateContext);

  return (
    <StyledHome>
      <section className="hero">
        <h1>El valor justo</h1>
        <div className="backgroundShape">
          <img src={titleShape} alt="" />
        </div>
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
