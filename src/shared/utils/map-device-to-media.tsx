import { breakpoints } from "@/shared/constants/style";

export const mapDeviceToMedia = {
  mobileOnly: `@media (max-width: ${breakpoints.tablet})`,
  tabletOnly: `@media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.laptop})`,
  laptopOnly: `@media (min-width: ${breakpoints.laptop}) and (max-width: ${breakpoints.desktop})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`,
  wide: `@media (min-width: ${breakpoints.wide})`,
};
