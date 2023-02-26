import styled from "styled-components";

export const StyledResultsPage = styled.section`
  width: 100%;
  padding-top: 6rem;
  display: flex;
  justify-content: right;
  .cardsContainer {
    width: 90%;
    height: 90vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    box-shadow: 0px -134px 33px -48px rgba(0, 0, 0, 0.7) inset;
    -webkit-box-shadow: 0px -134px 33px -48px rgba(0, 0, 0, 0.7) inset;
    -moz-box-shadow: 0px -134px 33px -48px rgba(0, 0, 0, 0.7) inset;
    @media (min-width: 768px) {
      padding: 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: auto;
    }
  }
`;
