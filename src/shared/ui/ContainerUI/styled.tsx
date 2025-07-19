import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0 auto;

  @media (min-width: 992px) {
    max-width: 1440px;
    padding: 0;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 720px;
    padding: 0 20px;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;
