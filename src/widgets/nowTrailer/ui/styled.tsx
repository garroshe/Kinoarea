import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledNewTrailer = styled.section`
  margin-bottom: 75px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;

    .header-wrapper {
      display: flex;
      gap: 27px;
      align-items: center;
      font-weight: 700;
      font-size: 22px;
      line-height: 100%;
      letter-spacing: 0;
      color: ${colors.white50};
    }
  }

  .trailer {
    position: relative;
    margin-bottom: 26px;

    .position {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
  }

  .trailer-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 43px;
  }

  .left-block {
    display: flex;
    gap: 34px;
    align-items: center;

    .trailer-name {
      font-weight: 900;
      font-size: 45px;
      line-height: 100%;
      letter-spacing: 0;
      color: ${colors.white50};
    }
  }

  .marks {
    display: flex;
    gap: 8px;

    .block {
      width: 58px;
      height: 58px;
      border-radius: 10px;
      background: ${colors.blue800};
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .rating {
      font-weight: 400;
      font-size: 15px;
      line-height: 100%;
      letter-spacing: 0;
      color: ${colors.white50};
      text-align: center;
      margin-top: 8px;
    }
  }

  .slider-title {
    font-weight: 900;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0;
    color: ${colors.white50};
    margin-top: 11px;
  }

  .dislike-icon {
    transform: rotate(180deg);
  }
`;
