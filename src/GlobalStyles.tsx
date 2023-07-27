import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Inter";
        src: url("./fonts/Inter-Regular.ttf");
    }

    * {
        font-family: Inter, sans-serif;
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
    font-family: Arial, sans-serif;
    font-size: 16px;
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
