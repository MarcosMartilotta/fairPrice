import { StyledButton } from "../styled-components/styledButton";
import { useContext } from "react";
import NavigateContext from "../context/navigateContext";

const Button = ({ value, route }) => {
  const { changeRoute } = useContext(NavigateContext);

  return (
    <StyledButton type="button" onClick={() => changeRoute(route)}>
      {value}
    </StyledButton>
  );
};

export default Button;
