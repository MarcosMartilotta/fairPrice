import styled from "styled-components";

export const StyledBudgetPage = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 2fr repeat(3, 1fr);
  align-items: center;
  justify-items: center;

  .hero {
    width: 100%;
    padding: 1rem;
    padding-top: 5rem;
    height: 30vh;
    display: grid;
    align-content: bottom;

    h2 {
      width: 25rem;
      text-align: left;
      font-size: 3.5rem;
      letter-spacing: 0.2rem;
      line-height: 5rem;
    }
  }

  .input-section {
    width: 70%;
    height: 4rem;
    input {
      width: 100%;
      height: 100%;
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
      margin-bottom: 4rem;

      &.error {
        color: tomato;
      }
    }
  }
`;
