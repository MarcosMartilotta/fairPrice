import styled from "styled-components";

export const StyledAmbientsPage = styled.section`
  display: grid;
  grid-template-rows: 2fr repeat(5, 1fr);
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
    width: 3rem;
    text-align: left;
    font-size: 3.5rem;
    letter-spacing: 0.2rem;
    line-height: 5rem;
  }

  button {
    height: 4rem;
    width: 70%;
    border-radius: 1rem;
    font-size: 2rem;
    cursor: pointer;
  }
`;
