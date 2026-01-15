import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useModal } from "@/app/providers/modal";
import { useUser } from "@/app/providers/user";
import { CopyReviewLink } from "@/features/copyReviewLink";
import { ReportToReview } from "@/features/reportToReview";
import { WriteReviews } from "@/features/writeReviews";
import { useMediaQuery } from "@/shared/hooks/use-media-query.ts";
import { routesBook } from "@/shared/routing/routesBook";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";
import { TitleUI } from "@/shared/ui/TitleUI";
import { mapModalName } from "@/shared/utils/map-modal-name";
import { getReviewContentByType } from "@/widgets/ReviewsList/utils/get-review-content-by-type";

import { useGetReviewsFetchQuery } from "../api/hooks/use-get-reviews-fetch-query";
import {
  StyledButton,
  StyledHeader,
  StyledReview,
  StyledReviewAvatar,
  StyledReviewContent,
  StyledReviewFooter,
  StyledReviewHeader,
  StyledReviewLeftBlock,
  StyledReviewName,
  StyledReviewNameAndReviewTypeWrapper,
  StyledReviewRightBlock,
  StyledReviewsWrapper,
  StyledReviewTitleAndDateWrapper,
  StyledReviewType,
  StyledSelfReviews,
  StyledSelfReviewsHeader,
  StyledSelfReviewsHeaderName,
  StyledSelfReviewsHeaderRight,
  StyledSelfReviewsHeaderSubtitle,
  StyledSelfReviewsImage,
} from "./styled";

export const ReviewsList = () => {
  const { movieReviewsFetch, isMovieReviewsLoading } = useGetReviewsFetchQuery();

  const [searchParams] = useSearchParams();

  const { user } = useUser();
  const { openModal } = useModal();
  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width: 480px)");

  const handleAddReviews = () => {
    if (!user) {
      openModal(mapModalName.login);
    }
  };

  const handleNavigateProfile = () => {
    navigate(routesBook.personalAccount());
  };

  useEffect(() => {
    const review = searchParams.get("reviewId");
    if (review && movieReviewsFetch.length > 0) {
      const element = document.getElementById(review);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [searchParams, movieReviewsFetch]);

  if (isMovieReviewsLoading) {
    return <SpinnerUI size="large" />;
  }

  return (
    <ContainerUI>
      <StyledHeader id="movie-reviews">
        <TitleUI title="Коментарі до фільму" fontSize={65} />
        <StyledButton onClick={handleAddReviews}>Додати коментар</StyledButton>
      </StyledHeader>

      {user && (
        <StyledSelfReviews>
          <StyledSelfReviewsHeader>
            {user.avatar ? (
              <StyledSelfReviewsImage onClick={handleNavigateProfile} src={user?.avatar} alt={user?.userName} />
            ) : (
              <SvgIcon className="avatar" icon={icons.avatarMale} />
            )}
            <StyledSelfReviewsHeaderRight>
              <StyledSelfReviewsHeaderName onClick={handleNavigateProfile}>
                {user?.userName || user?.loginName || user?.lastName || "Анонім"}
              </StyledSelfReviewsHeaderName>
              <StyledSelfReviewsHeaderSubtitle onClick={handleNavigateProfile}>
                Мій профіль
              </StyledSelfReviewsHeaderSubtitle>
            </StyledSelfReviewsHeaderRight>
          </StyledSelfReviewsHeader>
          <WriteReviews />
        </StyledSelfReviews>
      )}

      {movieReviewsFetch.length > 0 && (
        <StyledReviewsWrapper>
          {movieReviewsFetch.map((item) => (
            <StyledReview $border={item.reviewType} key={item.id} id={`review_id-${item.id}`}>
              <StyledReviewHeader>
                <StyledReviewLeftBlock>
                  {item.avatar === "none_avatar" ? (
                    <SvgIcon className="avatar" icon={icons.avatarMale} />
                  ) : (
                    <StyledReviewAvatar src={item.avatar} alt={item.name} />
                  )}
                  <StyledReviewNameAndReviewTypeWrapper>
                    <StyledReviewName>{item.name || user?.loginName || user?.lastName || "Анонім"}</StyledReviewName>
                    {!isMobile && (
                      <StyledReviewType $reviewType={item.reviewType}>
                        {getReviewContentByType[item.reviewType]}
                      </StyledReviewType>
                    )}
                  </StyledReviewNameAndReviewTypeWrapper>
                </StyledReviewLeftBlock>
                <StyledReviewRightBlock></StyledReviewRightBlock>
              </StyledReviewHeader>
              {isMobile && (
                <StyledReviewType $reviewType={item.reviewType}>
                  {getReviewContentByType[item.reviewType]}
                </StyledReviewType>
              )}
              <StyledReviewTitleAndDateWrapper>
                <TitleUI title={item.title} fontSize={30} fontWeight={700} />
                <span>{item.date}</span>
              </StyledReviewTitleAndDateWrapper>
              <StyledReviewContent>{item.content}</StyledReviewContent>
              <StyledReviewFooter>
                <CopyReviewLink reviewId={`review_id-${item.id}`} />
                <ReportToReview movieId={item.movieId} />
              </StyledReviewFooter>
            </StyledReview>
          ))}
        </StyledReviewsWrapper>
      )}
    </ContainerUI>
  );
};
