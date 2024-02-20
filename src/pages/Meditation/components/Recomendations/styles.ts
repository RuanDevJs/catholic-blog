import styled from "styled-components";

export const Container = styled.div``;

export const Article = styled.div`
  margin-bottom: 2rem;

  img {
    object-fit: cover;
    border-radius: 8px;
  }

  h1 {
    font-size: 0.875rem;
    font-weight: 500;
    color: #fff;

    text-align: center;
    line-height: 1.3rem;

    width: 320px;
    margin: 1rem auto;
  }

  p {
    font-size: 10px;
    font-weight: 500;
    color: #c2c2c2;

    line-height: 1.3rem;
    text-align: center;
  }
`;
