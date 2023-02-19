import { StyledHamburguer } from "../styled-components/styledHamburguer";

const Hamburguer = ({ clicked, handleClick }) => {
  return (
    <StyledHamburguer>
      <div
        onClick={handleClick}
        className={`nav-icon ${clicked ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </StyledHamburguer>
  );
};

export default Hamburguer;
