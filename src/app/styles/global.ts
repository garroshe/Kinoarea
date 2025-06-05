import {createGlobalStyle} from "styled-components";
import {colors} from "../../constants/style.ts";

import bgMain from "../../assets/atTheMoment/bg.png";

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
    
    .container {
        width: 1440px;
        margin: 0 auto;
    }
    
    body {
        position: relative;
        padding-top: 20px;
        background-color: ${colors.blue900};
        font-family: 'Poppins', sans-serif;
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
`