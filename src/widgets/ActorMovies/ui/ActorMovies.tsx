import { MovieListCard } from "@/features/MovieListCard";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { ErrorStateUI } from "@/shared/ui/ErrorStateUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";
import { getPathToImg } from "@/shared/utils/get-path-to-img";

import { ERROR_MESSAGE } from "../const";
import { formatedData } from "../model";
import { StyledActorMovies, StyledMoreButton, StyledTitle } from "./styled";

export const ActorMovies = () => {
  const { isLoading, movies, handleLoadMore, error } = formatedData();

  return (
    <StyledActorMovies>
      <ContainerUI>
        <StyledTitle>Фільми та серіали</StyledTitle>
        {isLoading ? (
          <SpinnerUI size="large" />
        ) : error ? (
          <ErrorStateUI content={ERROR_MESSAGE} />
        ) : (
          <div>
            {movies?.map((actorMovie) => {
              return (
                <MovieListCard
                  key={actorMovie.id}
                  poster={getPathToImg(actorMovie.poster_path)}
                  releaseDate={actorMovie.release_date}
                  id={actorMovie.id}
                  title={actorMovie.title}
                  genre={actorMovie.genre_ids}
                  vote_average={actorMovie.vote_average}
                />
              );
            })}
          </div>
        )}
        <StyledMoreButton onClick={handleLoadMore}>Показати більше</StyledMoreButton>
      </ContainerUI>
    </StyledActorMovies>
  );
};
