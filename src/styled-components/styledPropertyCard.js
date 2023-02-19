import styled from "styled-components";

export const StyledPropertyCard = styled.div`
  width: 90%;
  height: 8rem;
  margin: 1rem 0 1rem 0;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 8rem auto;

  .image {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 8rem;
      object-fit: cover;
    }
  }
  .description {
    display: grid;
    grid-template-rows: 1fr 1fr;
    padding: 2rem;
  }
  .property-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
