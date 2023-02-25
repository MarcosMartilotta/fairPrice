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

    p {
      display: none;
    }
    @media (min-width: 768px) {
      p {
        width: 80%;
        display: block;
        margin-top: 2rem;
        font-weight: 300;
        font-size: 2rem;
        text-align: center;
        justify-self: center;
      }
    }
  }
  /*   .backgroundShape {
    position: absolute;
    top: -7rem;
    z-index: -2;
    width: 140%;
    left: -161px;
    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  } */
  h1 {
    width: 3rem;
    text-align: left;
    font-size: 5rem;
    letter-spacing: 0.2rem;
    line-height: 7rem;

    @media (min-width: 768px) {
      width: 100%;
      font-size: 4rem;
      text-align: center;
      margin-top: 4rem;
    }
  }
  .questions {
    padding-top: 14rem;
    display: grid;
    gap: 4rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      gap: 0;
      .graficsButton {
      }
    }
  }
`;
