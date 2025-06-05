import styled from "styled-components";
import {colors} from "../../../constants/style.ts";

export const StyledMovieCard = styled.div`
    position: relative;
    width: 340px;
    height: 520px;

    .title {
        font-weight: 700;
        font-size: 18px;
        line-height: 100%;
        letter-spacing: 0;
        color: ${colors.white50};
        margin-top: 12px;
    }
    
    .description {
        font-weight: 400;
        font-size: 15px;
        line-height: 100%;
        letter-spacing: 0;
        color: ${colors.yellow500};
        margin-top: 5px;
    }
    
    img {
        width: 100%;
        border-radius: 10px;
    }
    
    .rating {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 62px;
        height: 33px;
        background: ${colors.green500};
        color: ${colors.white50};
        font-weight: 700;
        font-size: 18px;
        line-height: 100%;
        letter-spacing: 0;
        border-radius: 10px;
        text-align: center;
        padding-top: 6px;
    }
`