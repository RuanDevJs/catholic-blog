import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1rem;

  padding: 1rem 0;
  border-top: 1px solid #f2f2f2;

  display: flex;
  align-items: center;
  gap: 1rem;

  cursor: pointer;

  transition: 0.32s ease-in-out;

  &:hover {
    opacity: 0.72;
  }

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    text-align: center;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: 220px;

  object-fit: cover;

  border-radius: 4px;

  @media only screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  height: 100%;

  span {
    font-weight: 600;
    font-size: 0.625rem;

    color: #c9942c;

    text-transform: capitalize;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 8px 0;

    width: 100%;
  }

  p {
    font-weight: 400;
    font-size: 0.75rem;

    width: 100%;
    color: #c2c2c2;

    line-height: 1.5rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
