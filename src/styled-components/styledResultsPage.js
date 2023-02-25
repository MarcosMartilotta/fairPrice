import styled from "styled-components";

export const StyledResultsPage = styled.section`
  width: 100%;
  padding-top: 6rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  @media (min-width: 768px) {
    padding: 8rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
  }
`;
