import Img from "../../assets/Background.jpeg";
import styled from "styled-components";

export const Background = styled.main`
  background: url(${Img}) no-repeat center center;
  background-size: cover;
  height: calc(100vh * 0.52);

  margin: 2rem auto !important;

  @media only screen and (max-width: 768px) {
    width: 100% !important;
    height: calc(100vh * 0.32);
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
  }
`;

export const News = styled.div`
  width: calc(100vw * 0.82);
  margin: 2rem auto;
`;

export const NewsHeading = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1rem;

  h2 {
    font-size: 1rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  gap: 2rem;
  overflow: hidden;
`;

export const Articles = styled.div``;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`;

export const Poster = styled.div`
  position: relative;
  display: none;
`;

export const PosterPlayer = styled.div`
  width: 100%;
  height: 150px;

  background-color: #000;
  padding: 1rem;

  border-radius: 0 0 12px 12px;
  text-align: center;

  position: relative;
  top: -12px;

  color: #fff;

  h2 {
    font-size: 1.2rem;
    font-weight: 600;

    color: #fff;
  }

  p {
    width: 320px;
    margin: 5px auto;

    font-size: 0.75rem;
    font-weight: 400;

    color: #c2c2c2;
    text-transform: capitalize;
  }
`;

export const PosterImage = styled.img`
  /* width: calc(100vw * 0.72);
  height: calc(100vw * 0.2);

  object-fit: cover;
  border-radius: 400px 400px 0 0; */
`;

export const Player = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  cursor: pointer;

  svg {
    cursor: pointer;
  }

  span {
    font-size: 0.875rem;
    font-weight: 500;

    color: #fff;
    text-transform: capitalize;
  }

  &:hover {
    opacity: 0.72;
  }
`;
