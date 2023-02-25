import styled from "styled-components";
import { theme } from "../theming.js";

export const StyledPaginationBar = styled.div`
  position: absolute;
  bottom: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .circle {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${theme.light.red};
    margin: -0.02rem;
  }

  .union {
    width: 6rem;
    height: 0.5rem;
    background-color: ${theme.light.red};
    opacity: 0.5;
  }

  .one,
  .two,
  .three,
  .four {
    opacity: 0.5;
  }

  .pinted-ball {
    transition: 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 1;
  }
  .pinted-line {
    transition: 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 1;
  }
`;
