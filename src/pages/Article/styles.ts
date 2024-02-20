import styled from "styled-components";

export const Background = styled.main`
  background-color: hsl(228, 6%, 8%);
  padding: 1rem;

  height: auto;

  color: white;
`;

export const Container = styled.div`
  width: calc(100vw * 0.82);
  margin: 2rem auto;
`;

export const Heading = styled.div`
  width: calc(100vw * 0.6);
  margin: 0 auto;

  text-align: center;

  @media only screen and (max-width: 768px) {
    width: calc(100vw * 0.82);
    text-align: left;
  }
`;

export const Tag = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  color: #c9942c;

  @media only screen and (max-width: 768px) {
    font-size: 8px;
    text-align: left;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: white;

  margin: 8px 0;

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

export const Content = styled.div`
  width: calc(100vw * 0.6);
  margin: 2rem auto;

  @media only screen and (max-width: 768px) {
    width: calc(100vw * 0.82);
    margin: 0 auto;
    text-align: left;
  }
`;

export const Text = styled.p`
  margin: 1rem auto;
  line-height: 1.5rem;

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
