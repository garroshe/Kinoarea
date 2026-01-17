import styled from "styled-components";

import { colors } from "@/shared/constants/style";
import { mapDeviceToMedia } from "@/shared/utils/map-device-to-media";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 73px;
  margin-bottom: 63px;

  ${mapDeviceToMedia.mobileOnly} {
    flex-direction: column;
    margin-bottom: 20px;
    gap: 20px;
  }
`;

export const StyledButton = styled.button`
  width: 214px;
  height: 63px;
  border-radius: 10px;
  background: ${colors.blue500};
  font-weight: 700;
  font-size: 16px;
  line-height: 167%;
  border: none;
  color: ${colors.white50};
  cursor: pointer;

  &:hover {
    background: ${colors.blue400};
    box-shadow: 0 0 10px 0 ${colors.white50};
  }
`;

export const StyledSelfReviews = styled.div`
  width: 100%;
  height: auto;
  padding: 47px 37px 53px 80px;
  background-color: ${colors.blue700};
  border-radius: 10px;
  margin-bottom: 70px;

  .avatar {
    width: 114px;
    height: 114px;
    border-radius: 50%;
    cursor: pointer;
  }

  ${mapDeviceToMedia.tabletOnly} {
    padding: 48px 56px 44px 54px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    padding: 50px 22px 36px 16px;
    margin-bottom: 32px;
  }
`;

export const StyledSelfReviewsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
  margin-bottom: 33px;

  ${mapDeviceToMedia.mobileOnly} {
    gap: 20px;
  }
`;

export const StyledSelfReviewsImage = styled.img`
  width: 114px;
  height: 114px;
  border-radius: 50%;
  cursor: pointer;

  ${mapDeviceToMedia.mobileOnly} {
    width: 94px;
    height: 94px;
  }
`;

export const StyledSelfReviewsHeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 7px;
`;

export const StyledSelfReviewsHeaderName = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 100%;
  color: ${colors.white50};
  cursor: pointer;

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 20px;
  }
`;

export const StyledSelfReviewsHeaderSubtitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 100%;
  color: ${colors.white50};
  cursor: pointer;

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 15px;
  }
`;

export const StyledReviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-bottom: 72px;
`;

export const StyledReview = styled.div<{ $border: string }>`
  width: 100%;
  height: auto;
  background-color: ${colors.blue800};
  border: 5px solid
    ${({ $border }) =>
      $border === "positive" ? colors.green500 : $border === "negative" ? colors.red500 : colors.yellow500};
  border-radius: 10px;
  padding: 47px 44px 73px 44px;

  ${mapDeviceToMedia.tabletOnly} {
    padding: 18px 34px 50px 46px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    padding: 16px 20px 40px 22px;
  }
`;

export const StyledReviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledReviewLeftBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;

  .avatar {
    width: 114px;
    height: 114px;
    border-radius: 50%;
    cursor: pointer;
  }

  ${mapDeviceToMedia.tabletOnly} {
    gap: 10px;

    .avatar {
      width: 85px;
      height: 85px;
    }
  }

  ${mapDeviceToMedia.mobileOnly} {
    gap: 16px;

    .avatar {
      width: 57px;
      height: 57px;
    }
  }
`;

export const StyledReviewAvatar = styled.img`
  width: 115px;
  height: 115px;
  border-radius: 50%;

  ${mapDeviceToMedia.tabletOnly} {
    width: 85px;
    height: 85px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    width: 57px;
    height: 57px;
  }
`;

export const StyledReviewNameAndReviewTypeWrapper = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
`;

export const StyledReviewName = styled.h2`
  color: ${colors.white50};
  font-size: 30px;
  font-weight: 700;
  line-height: 100%;

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 25px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 20px;
  }
`;

export const StyledReviewType = styled.div<{ $reviewType: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  border-radius: 5px;
  padding: 0 8px;
  background-color: ${({ $reviewType }) =>
    $reviewType === "positive"
      ? "rgba(87, 208, 67, 0.38)"
      : $reviewType === "negative"
        ? "rgba(224, 65, 65, 0.38)"
        : "rgba(255, 240, 101, 0.38)"};
  color: ${({ $reviewType }) =>
    $reviewType === "positive" ? colors.green500 : $reviewType === "negative" ? colors.red500 : colors.yellow500};

  ${mapDeviceToMedia.mobileOnly} {
    margin-top: 12px;
    max-width: 200px;
  }
`;

export const StyledReviewTitleAndDateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 44px;

  span {
    color: ${colors.grey400};
    font-size: 15px;
    font-weight: 500;
    line-height: 100%;
  }

  ${mapDeviceToMedia.tabletOnly} {
    gap: 18px;
    margin-top: 21px;

    span {
      font-size: 14px;
    }
  }

  ${mapDeviceToMedia.mobileOnly} {
    flex-direction: column;
    align-items: start;
    gap: 8px;
    margin-top: 12px;

    span {
      font-size: 12px;
    }
  }
`;

export const StyledReviewContent = styled.p`
  color: ${colors.white50};
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
  margin-top: 20px;

  ${mapDeviceToMedia.tabletOnly} {
    margin-top: 12px;
    font-size: 17px;
    font-weight: 400;
  }

  ${mapDeviceToMedia.mobileOnly} {
    margin-top: 12px;
    font-size: 13px;
    font-weight: 400;
  }
`;

export const StyledReviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  ${mapDeviceToMedia.mobileOnly} {
    margin-top: 28px;
  }
`;

export const StyledReviewRightBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTitle = styled.h2`
  font-size: 65px;
  font-weight: 900;
  color: ${colors.white50};

  ${mapDeviceToMedia.laptopOnly} {
    font-size: 40px;
  }

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 40px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    text-align: center;
    font-size: 32px;
  }
`;

export const StyledReviewTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: ${colors.white50};

  ${mapDeviceToMedia.tabletOnly} {
    font-size: 25px;
  }

  ${mapDeviceToMedia.mobileOnly} {
    font-size: 20px;
  }
`;
