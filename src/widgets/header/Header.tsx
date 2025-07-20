import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

import { HeaderDesktop } from "./ui/HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "./ui/HeaderMobile/HeaderMobile";

export const Header = () => {
  const isTabletOrSmaller = useMediaQuery("(max-width: 1279px)");
  return isTabletOrSmaller ? <HeaderMobile /> : <HeaderDesktop />;
};
