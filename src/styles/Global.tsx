import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* h1, h2, h3, h4, p, a, ul, li, a,span {
    display: block;
    max-width: 100%;
  } */

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  body, input, textarea, a, span {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: #000000;

    text-decoration: none;
  }

  .container {
    width: calc(100vw * 0.82);
    margin: 0 auto;
  }
`;
