import styled from "styled-components";

export const Container = styled.div`
  width: calc(100vw * 0.82);
  margin: 2rem auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  gap: 2rem;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
