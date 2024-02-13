import styled from "styled-components";

export const Background = styled.header`
  padding: 2rem 1rem;
  background-color: #000;
`;

export const Container = styled.div`
  max-width: calc(100vw * 0.82);
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 720px) {
    max-width: 100%;
    padding: 1rem;

    display: flex;
    flex-direction: row !important;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;

  &:hover {
    opacity: 0.72;
  }

  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

export const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  color: #fff;

  &:hover span {
    opacity: 0.72;
  }
`;
