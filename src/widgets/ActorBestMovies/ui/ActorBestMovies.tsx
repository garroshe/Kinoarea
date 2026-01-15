import { SliderWithMovie } from "@/features/sliderWithMovieCard";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { ErrorStateUI } from "@/shared/ui/ErrorStateUI";

import { ERROR_MESSAGE } from "../const";
import { formaterMovieData } from "../model";
import { StyledTitle, StyledWrapper } from "./styled";

export const ActorBestMovies = () => {
  const { movieError, isMovieLoading, formatedMovieData } = formaterMovieData();

  return (
    <ContainerUI>
      <StyledWrapper>
        <StyledTitle>Найкращі фільми</StyledTitle>
        {movieError ? (
          <ErrorStateUI content={ERROR_MESSAGE} />
        ) : (
          <SliderWithMovie isMovieLoading={isMovieLoading} movieData={formatedMovieData} />
        )}
      </StyledWrapper>
    </ContainerUI>
  );
};
