import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (width: 1024px) {
    display: none;
  }
`;

export const Poster = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  margin-bottom: 1rem;

  &:nth-child(2) {
    height: 100%;
  }
`;

export const Player = styled.div`
  width: 100%;
  height: 170px;

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

  @media screen and (width: 1024px) {
    width: calc(100vw * 0.32);
  }
`;

export const Image = styled.img`
  width: calc(100vw * 0.72);
  height: 100%;

  object-fit: cover;
  border-radius: 400px 400px 0 0;
`;

export const Play = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  cursor: pointer;

  svg {
    cursor: pointer;
  }

  a {
    font-size: 0.875rem;
    font-weight: 500;

    color: #fff;
    text-transform: capitalize;
  }

  transition: ease-in-out 0.32s;

  &:hover {
    opacity: 0.72;
  }
`;
