import styled from "styled-components";

export const StyledHome = styled.section`
  .hero {
    padding: 1rem;
    padding-top: 5rem;
    height: 40vh;
    display: grid;
    align-content: bottom;
    background-color: aquamarine;
  }
  h1 {
    width: 3rem;
    text-align: left;
    font-size: 4rem;
    letter-spacing: 0.2rem;
    line-height: 5rem;
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
    }
  }
`;
