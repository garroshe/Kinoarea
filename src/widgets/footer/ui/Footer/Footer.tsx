import { Link } from "react-router-dom";

import { routesBook } from "@/shared/routing/routesBook";
import { NavBar } from "@/widgets/footer/ui/NavBar/ui/NavBar";
import { Social } from "@/widgets/footer/ui/Social/ui/Social";

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
