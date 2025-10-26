import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledSelfReviewsWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const StyledSelfReviewTitleInput = styled.input`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  background: ${colors.blue800};
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  padding: 19px 23px;
  color: ${colors.white400};
`;

export const StyledSelfReviewTypeSelector = styled.select`
  width: 100%;
  height: 70px;
  flex: 1;
  background: ${colors.blue800};
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  line-height: 100%;
  padding: 0 33px;
  color: ${colors.white50};
  border: none;
  outline: none;
`;

export const StyledTopBlock = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledElementAndErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 2;
`;

export const StyledContentTextArea = styled.textarea`
  width: 100%;
  height: 344px;
  border-radius: 10px;
  background: ${colors.blue800};
  color: ${colors.white50};
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  padding: 22px 27px;
`;
