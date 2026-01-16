import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { StyledReportToReview } from "./styled";

type ReportToReviewPropsType = {
  movieId: number;
};

export const ReportToReview = ({ movieId }: ReportToReviewPropsType) => {
  const handleClick = () => {
    console.log("clicked", movieId);
  };

  // TO DO
  // Make report to review

  return (
    <StyledReportToReview onClick={handleClick}>
      <SvgIcon icon={icons.alert} />
      <p>Поскаржитися на коментар</p>
    </StyledReportToReview>
  );
};
