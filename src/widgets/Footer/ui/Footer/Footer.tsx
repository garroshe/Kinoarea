import { Link } from "react-router-dom";

import { routesBook } from "@/shared/routing/routesBook";
import { ContainerUI } from "@/shared/ui/ContainerUI";

import { NavBar } from "../NavBar/NavBar";
import { Social } from "../Social/Social";
import { StyledFooter, StyledPrivacyAndPolicy, StyledRoot, StyledWrapper } from "./styled";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledWrapper>
      <ContainerUI>
        <StyledFooter>
          <Social />
          <NavBar />
          <StyledRoot>{currentYear} © Kinoarea. Усі права захищені</StyledRoot>
          <StyledPrivacyAndPolicy>
            <Link to={routesBook.privacyPolicy()}>Політика конфіденційності</Link>
          </StyledPrivacyAndPolicy>
        </StyledFooter>
      </ContainerUI>
    </StyledWrapper>
  );
};
