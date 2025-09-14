import { createGlobalStyle } from "styled-components";

import bgMain from "@/shared/assets/image/bg.png";
import { colors } from "@/shared/constants/style";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul, ol {
        list-style: none;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    ul[role="list"],
    ol[role="list"],
    ul,
    ol {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    body {
        min-height: 100vh;
        line-height: 1.5;
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
        height: auto;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    body {
        position: relative;
        background-color: ${colors.blue900};
        font-family: 'Poppins', sans-serif;
    }
    
    html {
        scroll-behavior: smooth;
    }

    .bg-main {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${bgMain}) no-repeat;
        z-index: -5;
    }

    * {
        transition: all 0.3s ease-in-out;
    }
`;
