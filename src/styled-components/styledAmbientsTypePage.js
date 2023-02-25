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
  .questions {
    margin-top: 6rem;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 4rem;
    @media (min-width: 768px) {
      margin-top: 12;
      grid-template-columns: 1fr;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  h2 {
    width: 25rem;
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
