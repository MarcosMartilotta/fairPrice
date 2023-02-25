import styled from "styled-components";
import { theme } from "../theming.js";

export const NavStyled = styled.nav`
  position: fixed;
  top: 0px;
  width: 100%;
  font-size: 2rem;
  z-index: 2;

  .hamburguer {
    right: 0;
  }

  .links-container {
    position: absolute;
    left: -2000px;
    top: 2rem;
    width: 100%;
    height: 90vh;
    transition: all 0.3s ease-in-out;
    &.active {
      left: 0;
    }

    @media (min-width: 768px) {
      position: initial;
      margin-top: 2rem;
      height: 0;
      font-weight: 300;
    }
  }

  ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    li {
      padding: 2rem 4rem 2rem 4rem;

      height: 4rem;

      text-align: center;
    }
    li:hover {
      text-shadow: 0px 0px 3px #fff;
      cursor: pointer;
    }

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: flex-start;
    }
  }

  .background-nav {
    position: absolute;
    padding-left: 1rem;
    left: -2000px;
    top: 0rem;
    width: 100%;
    height: 90vh;
    transition: all 0.3s ease-in-out;
    background-color: ${theme.light.blue};
    opacity: 0.95;
    z-index: -5;
    @media (max-width: 768px) {
      &.active {
        left: 0;
      }
    }
  }
`;
