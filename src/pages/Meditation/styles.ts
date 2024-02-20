import styled from "styled-components";

export const Background = styled.main`
  background-color: hsl(228, 6%, 8%);

  padding: 2rem;
`;

export const Container = styled.div`
  width: calc(100vw * 0.92);
  margin: 0 auto;

  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
`;
