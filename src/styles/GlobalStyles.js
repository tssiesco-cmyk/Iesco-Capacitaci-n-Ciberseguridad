import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    /* 18px en movil, 22px desde 1280px: minimo que pide el brief */
    font-size: 112.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;

    @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
      font-size: 137.5%;
    }

    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }

  body {
    font-family: ${({ theme }) => theme.fonts.base};
    color: ${({ theme }) => theme.colors.navy};
    background: ${({ theme }) => theme.colors.light};
    line-height: 1.6;
    overflow-wrap: break-word;
  }

  button {
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    border: none;
    background: transparent;
    color: inherit;
  }

  a {
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }

  /* Foco visible en todo lo navegable con teclado */
  :focus-visible {
    outline: 3px solid var(--focus, ${({ theme }) => theme.colors.navy});
    outline-offset: 3px;
    border-radius: 6px;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }
`;

export default GlobalStyles;
