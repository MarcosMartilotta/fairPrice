import styled from "styled-components";

export const StyledAmbientsTypePage = styled.section`
  display: grid;
  grid-template-rows: 2fr repeat(4, 1fr);
  height: 90vh;
  align-items: center;
  justify-items: center;
  .hero {
    width: 100%;
    padding: 1rem;
    padding-top: 5rem;
    height: 30vh;
    display: grid;
    align-content: bottom;
  }
  h2 {
    width: 25rem;
    text-align: left;
    font-size: 3.5rem;
    letter-spacing: 0.2rem;
    line-height: 5rem;
  }
`;
