import { useContext } from "react";
import { useState } from "react";
import { StyledHome } from "../styled-components/syledHome";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useChangeRoute } from "../hooks/useChangeRoute";

const Home = () => {
  const state = useContext(AppContext);
  const navigate = useNavigate();
  const [myContext, setMyContext] = useState(state);

  /*   const handleClick = () => {
    setMyContext({ ...state, routes: { home: "holis" } });
  }; */

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
      <div>{myContext.routes.home}</div>
    </StyledHome>
  );
};

export default Home;
