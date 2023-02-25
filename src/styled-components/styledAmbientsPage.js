import styled from "styled-components";

export const StyledAmbientsPage = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 90vh;
  align-items: center;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-rows: 2fr 1fr 1fr;
  }
  .hero {
    width: 100%;
    padding: 1rem;
    display: grid;
    align-content: bottom;
  }

  .questions {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    gap: 2rem;
    padding-bottom: 2rem;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, 1fr);
      button:nth-child(5) {
        grid-column-start: 1;
        grid-column-end: 3;
        margin: 0 auto;
        width: 50%;
      }
    }
  }

  h2 {
    width: 3rem;
    text-align: left;
    font-size: 3.5rem;
    letter-spacing: 0.2rem;
    line-height: 5rem;
    @media (min-width: 768px) {
      margin-top: 4rem;
      width: 100%;
      text-align: center;
    }
  }
`;
