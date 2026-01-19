import styled from "styled-components";

import { getPathToImg } from "@/shared/utils/get-path-to-img";

export const StyledCardMoviePage = styled.div<{ $backgroundImg?: string }>`
  background-image: ${({ $backgroundImg }) =>
    $backgroundImg
      ? `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${getPathToImg($backgroundImg)})`
      : "none"};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
