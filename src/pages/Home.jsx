import { StyledHome } from "../styled-components/syledHome";
import Button from "../components/Button";
// import background from "../assets/backGround.jpg";

const Home = () => {
  return (
    <StyledHome>
      <section className="hero">
        <h1>EL VALOR JUSTO</h1>
        <p>
          ¿Querés saber si tu alquiler es caro? ¿Si la casa que viste vale
          realmente lo que te dicen? ¡Estás en el sitio correcto!
        </p>
        {/* <div className="background">
          <img src={background} alt="" />
        </div> */}
        {/*      <div className="backgroundShape">
          <img src={titleShape} alt="" />
        </div> */}
      </section>
      <section className="questions">
        <Button
          className="graficsButton"
          value="Gráficos estadísticos"
          route="/statistics"
        ></Button>
        <Button
          className="alquileresButton"
          value="Alquileres convenientes"
          route="/questionnarie/ambients"
        ></Button>
      </section>
    </StyledHome>
  );
};

export default Home;
