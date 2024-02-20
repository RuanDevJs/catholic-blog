import { Link } from "react-router-dom";
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

  &:nth-child(1):hover {
    opacity: 0.72;
  }

  transition: 0.32s ease-in-out;
`;

export const RightMenu = styled(Menu)`
  span:hover {
    opacity: 0.72;
  }
`;

export const Text = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;

  @media only screen and (max-width: 720px) {
    display: none;
  }

  transition: 0.32s ease-in-out;
`;

export const Title = styled(Link)`
  font-size: 1.125rem;
  font-weight: 600;
  color: #fff;

  cursor: pointer;
  transition: 0.32s ease-in-out;

  &:hover {
    opacity: 0.72;
  }
`;
