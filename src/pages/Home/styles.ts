import styled, { keyframes } from "styled-components";

const AnimateUp = keyframes`
  from {
    opacity: 0.82;
    transform: translate3d(0, -10px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0px, 0);
  }
`;

export const Container = styled.div`
  animation: ${AnimateUp} 0.72s forwards;
`;
