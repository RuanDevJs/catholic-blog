import styled, { keyframes } from "styled-components";

export const AnimateDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }
  to {
    opacity: 0.72;
    transform: translate3d(0, 0px, 0);
  }
`;

export const Container = styled.div``;

export const Poster = styled.img`
  width: calc(100vw * 0.72);
  height: calc(100vh * 0.72);
  object-fit: cover;

  opacity: 0.32;
`;

export const Player = styled.div`
  position: relative;
  margin-bottom: 1rem;

  &:hover > div {
    animation: ${AnimateDown} 0.32s forwards;
  }
`;

export const Video = styled.video`
  display: block;

  width: calc(100%);
  height: calc(100vh * 0.72);
  object-fit: cover;

  opacity: 0.72;
  border-radius: 4px;
`;

export const Controls = styled.div`
  width: 320px;
  height: 50px;
  margin: 0 auto;

  background-color: rgba(0, 0, 0, 1);
  opacity: 0.72;

  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  border-radius: 100px 12px;

  opacity: 0;

  svg {
    transition: 0.24s ease-in-out;
    cursor: pointer;
  }

  svg:hover {
    filter: brightness(1.22);
    color: #c9942c;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;

  color: white;
  margin: 1rem 0;

  text-transform: capitalize;

  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    text-align: left;
    line-height: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 500;

  color: #c2c2c2;
  margin: 8px 0;

  text-align: center;
  border-bottom: 1px solid #c2c2c2;

  padding-bottom: 1rem;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    text-align: left;
    border-bottom: 0;
    line-height: 1.3rem;
    padding: 4px 0;
  }
`;
export const Text = styled.p`
  margin: 1rem auto;

  font-size: 0.875rem;
  font-weight: 500;

  line-height: 1.5rem;
  color: #c2c2c2;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    text-align: left;
    border-bottom: 0;
  }
`;

export const List = styled.ul`
  margin: 1rem 2rem;

  li {
    font-size: 0.875rem;
    font-weight: 500;

    color: #c2c2c2;
    margin: 1rem 0;

    text-align: left;

    @media only screen and (max-width: 768px) {
      font-size: 10px;
      text-align: left;
    }
  }
`;
