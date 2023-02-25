import styled from "styled-components";

export const StyledBudgetPage = styled.section`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-rows: 2fr repeat(3, 1fr);
  align-items: center;
  justify-items: center;

  .hero {
    width: 100%;
    padding: 1rem;
    padding-top: 4rem;
    height: 30vh;
    display: grid;
    align-content: bottom;

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
  }

  .input-section {
    width: 70%;
    height: 4rem;

    .input-field {
      position: relative;
    }

    .currency {
      position: absolute;
      padding-left: 1rem;
      padding-bottom: 3px;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 2rem;
    }

    input {
      width: 100%;
      height: 4rem;
      display: flex;
      align-items: center;
      padding: 0 2.5rem;
      font-size: 2rem;
      border: none;
      outline: none;
      border-radius: 1rem;
      appearance: textfiled;

      &:focus {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) inset;
      }
      &[type="number"]::-webkit-inner-spin-button {
        appearance: none;
      }
      &:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2) inset;
      }
    }
    p {
      font-size: 1.5rem;
      margin-bottom: 4rem;

      &.error {
        color: tomato;
      }
    }
    @media (min-width: 768px) {
      .button {
        width: 100%;
      }
    }
  }
`;
