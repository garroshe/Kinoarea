import { breakpoints } from "@/shared/constants/style";

export const mapDeviceToMedia = {
  mobileOnly: `@media (max-width: ${breakpoints.tablet})`, // до 768px
  tabletOnly: `@media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.laptop})`, // 768-1023
  laptopOnly: `@media (min-width: ${breakpoints.laptop}) and (max-width: ${breakpoints.desktop})`, // 1024–1279
  desktop: `@media (min-width: ${breakpoints.desktop})`, // 1280+
  wide: `@media (min-width: ${breakpoints.wide})`, // 1440+
};
