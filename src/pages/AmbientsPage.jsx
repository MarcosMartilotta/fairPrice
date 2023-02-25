import Button from "../components/Button";
import { StyledAmbientsPage } from "../styled-components/styledAmbientsPage";

const AmbientsPage = () => {
  return (
    <StyledAmbientsPage>
      <div className="hero">
        <h2>¿Cuántos ambientes desea?</h2>
      </div>
      <div className="questions">
        <Button value="Un ambiente" route="/questionnarie/type"></Button>
        <Button value="Dos ambientes" route="/questionnarie/type"></Button>
        <Button value="Tres ambientes" route="/questionnarie/type"></Button>
        <Button value="Cuatro ambientes" route="/questionnarie/type"></Button>
        <Button value="Cinco ambientes" route="/questionnarie/type"></Button>
      </div>
    </StyledAmbientsPage>
  );
};

export default AmbientsPage;
