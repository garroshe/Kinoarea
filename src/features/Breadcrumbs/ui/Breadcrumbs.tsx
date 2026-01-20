import { Link } from "react-router-dom";

import { colors } from "@/shared/constants/style";
import { routesBook } from "@/shared/routing/routesBook";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { StyledBreadcrumbs } from "./styled";

export type BreadCrumbType = {
  to: string;
  label: string;
  isLast: boolean;
};

type BreadcrumbsPropsType = {
  path: BreadCrumbType[];
};

export const Breadcrumbs = ({ path }: BreadcrumbsPropsType) => {
  return (
    <StyledBreadcrumbs>
      <li>
        <Link to={routesBook.main()}>Головна</Link>
      </li>
      {path.map((item, i) => {
        return (
          <li key={i}>
            <SvgIcon icon={icons.angleBracket} />
            <div style={{ color: `${item.isLast ? colors.white50 : ""}` }}>
              <Link to={item.to}>{item.label}</Link>
            </div>
          </li>
        );
      })}
    </StyledBreadcrumbs>
  );
};
