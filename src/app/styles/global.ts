import {createGlobalStyle} from "styled-components";
import {colors} from "../../constants/style.ts";

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
        padding-top: 20px;
        background-color: ${colors.blue900};
        font-family: 'Poppins', sans-serif;
    }
`