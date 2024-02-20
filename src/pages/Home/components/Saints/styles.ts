import styled, { keyframes } from "styled-components";

const AnimateFromUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -50px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0,0,0);
  }
`;

export const Saints = styled.section`
  background-color: #000;

  div {
    padding: 12px 0 12px 0;
  }

  h2 {
    font-size: 1.125rem;
    color: #fff;
  }
`;

export const Container = styled.div`
  width: calc(100vw * 0.82);
  margin: 0 auto;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;

    opacity: 0;

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  .grid.active {
    animation: ${AnimateFromUp} 0.72s forwards;
  }
`;

interface IGrid {
  active: boolean;
}

export const Grid = styled.div<IGrid>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;

  opacity: 0;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Saint = styled.div`
  cursor: pointer;
  transition: ease-in-out 0.32s;

  h3 {
    margin: 1rem 0;

    font-weight: 600;
    font-size: 1.5rem;
    color: #fff;

    text-align: center;
  }

  p {
    margin: 1rem 0;

    font-weight: 400;
    font-size: 0.875rem;
    color: #c2c2c2;

    text-align: center;

    line-height: 1.5rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  &:hover {
    transform: translate3d(0, -20px, 0);

    img {
      filter: brightness(1.25);
    }
  }
`;

export const Poster = styled.img`
  width: calc(100vh * 0.42);
  height: calc(100vh * 0.72);

  margin: 0 auto;

  border-radius: 400px 400px 12px 12px;
  object-fit: cover;

  transition: ease-in-out 0.32s;

  @media only screen and (max-width: 768px) {
    width: calc(100vh * 0.42);
    height: calc(100vh * 0.42);
  }
`;
