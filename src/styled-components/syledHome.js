import styled from "styled-components";

export const StyledHome = styled.section`
  .hero {
    position: relative;
    z-index: -3;
    padding: 1rem 2rem;
    padding-top: 5rem;
    height: 40vh;
    display: grid;
    align-content: bottom;
  }
  .backgroundShape {
    position: absolute;
    top: -7rem;
    z-index: -2;
    width: 140%;
    left: -161px;
  }
  h1 {
    width: 3rem;
    text-align: left;
    font-size: 5rem;
    letter-spacing: 0.2rem;
    line-height: 7rem;
  }
  .questions {
    padding-top: 14rem;
    display: grid;
    gap: 4rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
  }
`;
