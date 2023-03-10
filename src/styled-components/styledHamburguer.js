import styled from "styled-components";
import { theme } from "../theming.js";

export const StyledHamburguer = styled.div`
  display: inline-block;
  position: absolute;
  right: 1rem;
  top: 1rem;
  .nav-icon {
    width: 35px;
    height: 30px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }

  .nav-icon span {
    background-color: ${theme.light.red};
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 4px;
    transition-duration: 400ms;
  }

  .nav-icon span:nth-child(1) {
    top: 0px;
    left: 0px;
  }
  .nav-icon span:nth-child(2) {
    top: 13px;
    left: 0px;
    opacity: 1;
  }
  .nav-icon span:nth-child(3) {
    bottom: 0px;
    left: 0px;
  }

  .nav-icon.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 13px;
  }

  .nav-icon.open span:nth-child(2) {
    opacity: 0;
  }

  .nav-icon.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 13px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
