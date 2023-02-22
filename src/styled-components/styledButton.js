import styled from "styled-components";
import { theme } from "../theming";

export const StyledButton = styled.button`
  position: relative;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1em 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  transition: all 0.2s;
  border: none;
  font-family: inherit;
  font-weight: 500;
  color: black;
  background-color: ${theme.light.redWidthOpacity};
  box-shadow: 6px 6px 20px -15px rgba(0, 0, 0, 0.75);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  &::after {
    background-color: #fff;
  }

  &:hover::after {
    transform: scaleX(1) scaleY(1);
    opacity: 0;
  }
`;
