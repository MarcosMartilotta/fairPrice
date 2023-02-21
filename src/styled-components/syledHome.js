import styled from "styled-components";
import { theme } from "../theming.js";

export const StyledHome = styled.section`
  .hero {
    padding: 1rem 2rem;
    padding-top: 5rem;
    height: 40vh;
    display: grid;
    align-content: bottom;
  }
  .backgroundShape {
    position: absolute;
    top: -3rem;
    z-index: -2;
    width: 150%;
    left: -112px;
  }
  h1 {
    width: 3rem;
    text-align: left;
    font-size: 5rem;
    letter-spacing: 0.2rem;
    line-height: 7rem;
  }
  .questions {
    padding-top: 10rem;
    display: grid;
    gap: 4rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    button {
      height: 4rem;
      width: 70%;
      border-radius: 1rem;
      font-size: 2rem;
      cursor: pointer;

      &:hover {
        border-color: ${theme.light.red};
      }
    }
  }
`;
