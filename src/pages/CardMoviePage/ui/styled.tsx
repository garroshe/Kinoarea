import styled from "styled-components";

export const StyledCardMoviePage = styled.div<{ $backgroundImg: string }>`
  background-image:
    linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${(props) => props.$backgroundImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
