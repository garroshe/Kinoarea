import { useNavigate } from "react-router-dom";

import { useModal } from "@/app/providers/modal";
import { useUser } from "@/app/providers/user";
import { WriteReviews } from "@/features/writeReviews";
import { routesBook } from "@/shared/routing/routesBook";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";
import { TitleUI } from "@/shared/ui/TitleUI";
import { mapModalName } from "@/shared/utils/map-modal-name";

import { useGetReviewsFetchQuery } from "../api/hooks/use-get-reviews-fetch-query";
import {
  StyledButton,
  StyledHeader,
  StyledReview,
  StyledReviewsWrapper,
  StyledSelfReviews,
  StyledSelfReviewsHeader,
  StyledSelfReviewsHeaderName,
  StyledSelfReviewsHeaderRight,
  StyledSelfReviewsHeaderSubtitle,
  StyledSelfReviewsImage,
} from "./styled";

export const ReviewsList = () => {
  const { movieReviewsFetch, isMovieReviewsLoading } = useGetReviewsFetchQuery();

  const { user } = useUser();
  const { openModal } = useModal();
  const navigate = useNavigate();

  const handleAddReviews = () => {
    if (!user) {
      openModal(mapModalName.login);
    }
  };

  const handleNavigateProfile = () => {
    navigate(routesBook.personalAccount());
  };

  if (isMovieReviewsLoading) {
    return <SpinnerUI size="large" />;
  }

  return (
    <ContainerUI>
      <StyledHeader>
        <TitleUI title="Рецензії до фільму" fontSize={65} />
        <StyledButton onClick={handleAddReviews}>Додати рецензію</StyledButton>
      </StyledHeader>
      {movieReviewsFetch.length > 0 && (
        <StyledReviewsWrapper>
          {movieReviewsFetch.map((item) => (
            <StyledReview key={item.id}>{item.name}</StyledReview>
          ))}
        </StyledReviewsWrapper>
      )}
      {user && (
        <StyledSelfReviews>
          <StyledSelfReviewsHeader>
            <StyledSelfReviewsImage onClick={handleNavigateProfile} src={user?.avatar} alt={user?.userName} />
            <StyledSelfReviewsHeaderRight>
              <StyledSelfReviewsHeaderName onClick={handleNavigateProfile}>
                {user?.userName}
              </StyledSelfReviewsHeaderName>
              <StyledSelfReviewsHeaderSubtitle onClick={handleNavigateProfile}>
                Мій профіль
              </StyledSelfReviewsHeaderSubtitle>
            </StyledSelfReviewsHeaderRight>
          </StyledSelfReviewsHeader>
          <WriteReviews />
        </StyledSelfReviews>
      )}
    </ContainerUI>
  );
};
