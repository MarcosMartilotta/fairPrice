import { StyledHome } from "../styled-components/syledHome";
import titleShape from "../assets/titleShape.svg";
import Button from "../components/Button";

const Home = () => {
  return (
    <StyledHome>
      <section className="hero">
        <h1>El valor justo</h1>
        <div className="backgroundShape">
          <img src={titleShape} alt="" />
        </div>
      </section>
      <section className="questions">
        <Button value="Gráficos estadísticos" route="/statistics"></Button>
        <Button
          value="Alquileres convenientes"
          route="/questionnarie/ambients"
        ></Button>
      </section>
    </StyledHome>
  );
};

export default Home;
