import { StyledAmbientsTypePage } from "../styled-components/styledAmbientsTypePage";
import Button from "../components/Button";

const AmbientTypePage = () => {
  return (
    <StyledAmbientsTypePage>
      <div className="hero">
        <h2>¿Que tipo de propiedad busca?</h2>
      </div>
      <Button value="PH" route="/questionnarie/budget"></Button>
      <Button value="Departamento" route="/questionnarie/budget"></Button>
      <Button value="Casa" route="/questionnarie/budget"></Button>
    </StyledAmbientsTypePage>
  );
};

export default AmbientTypePage;
