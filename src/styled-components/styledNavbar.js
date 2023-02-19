import styled from "styled-components";

export const NavStyled = styled.nav`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 6rem;
  font-size: 2rem;

  .hamburguer {
    display: inline;
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
  }

  ul {
    height: 50%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .background-nav {
    position: absolute;
    padding-left: 1rem;
    left: -2000px;
    top: 0rem;
    width: 100%;
    height: 90vh;
    transition: all 0.3s ease-in-out;
    background-color: blue;
    z-index: -5;
    &.active {
      left: 0;
    }
  }
`;