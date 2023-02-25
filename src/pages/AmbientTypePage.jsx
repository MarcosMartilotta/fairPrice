import { StyledAmbientsTypePage } from "../styled-components/styledAmbientsTypePage";
import Button from "../components/Button";

const AmbientTypePage = () => {
  return (
    <StyledAmbientsTypePage>
      <div className="hero">
        <h2>¿Que tipo de propiedad busca?</h2>
      </div>
      <div div className="questions">
        <Button value="PH" route="/questionnarie/budget"></Button>
        <Button value="Departamento" route="/questionnarie/budget"></Button>
        <Button value="Casa" route="/questionnarie/budget"></Button>
      </div>
    </StyledAmbientsTypePage>
  );
};

export default AmbientTypePage;
