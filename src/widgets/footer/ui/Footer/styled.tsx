import styled from "styled-components";

import { colors } from "@/shared/constants/style";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0 50px 0;
`;

export const StyledRoot = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 119%;
  color: ${colors.blue50};
`;

export const StyledPrivacyAndPolicy = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 119%;
  text-align: center;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 0;
  color: ${colors.blue50};
  text-transform: uppercase;
  margin-top: 26px;
`;

export const StyledWrapper = styled.div`
  background: ${colors.blue700};
`;
