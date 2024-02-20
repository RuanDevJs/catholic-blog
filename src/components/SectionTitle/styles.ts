import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1rem;

  h2 {
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
