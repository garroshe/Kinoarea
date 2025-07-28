import { Link } from "react-router-dom";

import { routesBook } from "@/shared/routing/routesBook";

import { NavBar } from "./ui/NavBar/NavBar";
import { Social } from "./ui/Social/Social";
import { StyledFooter, StyledPrivacyAndPolicy, StyledRoot, StyledWrapper } from "./styled";

export const Footer = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <StyledFooter>
          <Social />
          <NavBar />
          <StyledRoot>2025 © Kinoarea. Усі права захищені</StyledRoot>
          <StyledPrivacyAndPolicy>
            <Link to={routesBook.privacyPolicy()}>Політика конфіденційності</Link>
          </StyledPrivacyAndPolicy>
        </StyledFooter>
      </div>
    </StyledWrapper>
  );
};
