import Img from "../../../../assets/Background.jpeg";
import styled from "styled-components";

export const Container = styled.main`
  background: url(${Img}) no-repeat center center;
  background-size: cover;
  height: calc(100vh * 0.52);

  margin: 2rem auto !important;

  @media only screen and (max-width: 768px) {
    width: 100% !important;
    height: calc(100vh * 0.36);
    margin: 0 auto !important;
  }
`;

export const Info = styled.div`
  height: 100%;
  padding: 4rem 3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    max-width: calc(100vw * 0.82);
    padding: 4rem 3rem;
    text-align: center;
    margin: 0 auto;
  }
`;

export const Tag = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  color: #c2c2c2;

  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
  color: #fff;

  text-transform: capitalize;
  padding: 4px 0 12px;

  @media only screen and (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const Description = styled.p`
  width: 45%;

  font-size: 1rem;
  font-weight: 400;

  color: #c2c2c2;
  line-height: 1.5rem;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Link = styled.a`
  font-size: 1rem;
  font-weight: 400;
  color: #c2c2c2;

  text-transform: uppercase;

  margin-top: auto;

  display: flex;
  align-items: center;
  gap: 8px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    font-size: 12px;
    margin-top: 1rem;
  }
`;
