import { MovieTabs } from "@/features/movieTabs";
import ErrorBoundary from "@/shared/ui/ErrorBoundaryUI/ErrorBoundaryUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";
import { getPathToImg } from "@/shared/utils/get-path-to-img";
import { Header } from "@/widgets/header";
import { MovieActors } from "@/widgets/movieActors";
import { MovieDescription } from "@/widgets/movieDescription";
import { NewTrailer } from "@/widgets/newTrailer";

import { useMovieFetchByIdQuery } from "../lib/use-movie-fetch-by-id-query";
import { StyledCardMoviePage } from "./styled";

const CardMoviePage = () => {
  const { movieDataFetch, isMovieLoading } = useMovieFetchByIdQuery();

  const backgroundImg = getPathToImg(movieDataFetch?.backdrop_path);

  return isMovieLoading ? (
    <SpinnerUI />
  ) : (
    <div>
      <StyledCardMoviePage $backgroundImg={backgroundImg}>
        <Header />

        <ErrorBoundary>
          <MovieDescription />
        </ErrorBoundary>
      </StyledCardMoviePage>
      <ErrorBoundary>
        <MovieActors />
      </ErrorBoundary>
      <MovieTabs />
      <NewTrailer title="Трейлери фильму" />
    </div>
  );
};

export default CardMoviePage;
