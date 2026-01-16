import { SliderWithMovie } from "@/features/SliderWithMovieCard";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { ErrorStateUI } from "@/shared/ui/ErrorStateUI";

import { ERROR_MESSAGE } from "../const";
import { useMovieData } from "../model";
import { StyledTitle, StyledWrapper } from "./styled";

export const ActorBestMovies = () => {
  const { movieError, isMovieLoading, bestMovies } = useMovieData();

  return (
    <ContainerUI>
      <StyledWrapper>
        <StyledTitle>Найкращі фільми</StyledTitle>
        {movieError ? (
          <ErrorStateUI content={ERROR_MESSAGE} />
        ) : (
          <SliderWithMovie isMovieLoading={isMovieLoading} movieData={bestMovies} />
        )}
      </StyledWrapper>
    </ContainerUI>
  );
};
