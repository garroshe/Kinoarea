import { Link } from "react-router-dom";

import { colors } from "@/shared/constants/style";
import { routesBook } from "@/shared/routing/routesBook";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import type { BreadCrumb } from "../model/types";
import { StyledBreadcrumbs } from "./styled";

type BreadcrumbsPropsType = {
  path: BreadCrumb[];
};

export const Breadcrumbs = ({ path }: BreadcrumbsPropsType) => {
  return (
    <StyledBreadcrumbs>
      <li>
        <Link to={routesBook.main()}>Головна</Link>
      </li>
      {path.map((item, i) => {
        return (
          <div key={i}>
            <SvgIcon icon={icons.angleBracket} />
            <li style={{ color: `${item.isLast ? colors.white50 : ""}` }}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          </div>
        );
      })}
    </StyledBreadcrumbs>
  );
};
