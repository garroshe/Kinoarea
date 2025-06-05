import styled from "styled-components";
import {colors} from "../../../constants/style.ts";

export const StyledNowPlaying = styled.section`
    margin-top: 50px;
    margin-bottom: 54px;
    
    .cards {
        display: grid;
        grid-template-columns: repeat(4, 340px);
        gap: 20px;
        justify-content: center;
        margin-top: 63px;
    }
    
    button {
        display: block;
        width: 200px;
        height: 70px;
        border: 2px solid ${colors.white50};
        background: transparent;
        font-weight: 700;
        font-size: 18px;
        line-height: 167%;
        letter-spacing: 0;
        color: ${colors.white50};
        text-align: center;
        border-radius: 10px;
        margin: 50px auto 0 auto;
        cursor: pointer;
    }
`;

export const StyledNowPlayingWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .divider {
        height: 2px;
        width: 52px;
        background: ${colors.white50};
    }
`;

export const StyledNowPlayingTitle = styled.h2`
    font-weight: 900;
    font-size: 65px;
    line-height: 100%;
    letter-spacing: 0;
    color: ${colors.white50};
`;