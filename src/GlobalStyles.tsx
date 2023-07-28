import { createGlobalStyle } from "styled-components";
import fontInter from "./fonts/Inter-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Inter";
        src: url(${fontInter});
    }

    * {
        font-family: Inter, sans-serif;
        transition: 0.25s ease-in-out;
        -webkit-text-size-adjust: none;
    }

    html,
    body,
    div,
    span,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    img,
    ul,
    ol,
    li {
        margin: 0;
        padding: 0;
        border: 0;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-size: 1rem;
        padding-top: 2rem;
        padding-left: 4rem;
        overflow: hidden;
    }

    body.show-nav {
        transform: translateX(300px);
    }

    @media all and (max-width: 350px) {
        body.show-nav {
          transform: translateX(calc(100% - 50px));
        }
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    ol {
        list-style-type: none;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
    }

    p {
        margin-bottom: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }
`;
