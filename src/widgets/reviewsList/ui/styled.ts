import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 73px;
  margin-bottom: 63px;
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
`;

export const StyledSelfReviewsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
  margin-bottom: 33px;
`;

export const StyledSelfReviewsImage = styled.img`
  width: 114px;
  height: 114px;
  border-radius: 50%;
  cursor: pointer;
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
`;

export const StyledSelfReviewsHeaderSubtitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 100%;
  color: ${colors.white50};
  cursor: pointer;
`;

export const StyledReviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const StyledReview = styled.div`
  width: 100%;
  height: auto;
  background-color: ${colors.blue800};
  border: 5px solid ${colors.green500};
  border-radius: 10px;
  padding: 47px 44px 73px 44px;
`;
