import { NavigateTabs } from "@/features/NavigateTabs";
import ErrorBoundary from "@/shared/ui/ErrorBoundaryUI/ErrorBoundaryUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";
import { Header } from "@/widgets/Header";
import { MovieActors } from "@/widgets/MovieActors";
import { MovieDescription } from "@/widgets/MovieDescription";
import { MovieFrames } from "@/widgets/MovieFrames";
import { NewTrailer } from "@/widgets/NewTrailer";
import { PopularMovie } from "@/widgets/PopularMovie";
import { ReviewsList } from "@/widgets/ReviewsList";
import { SequelsAndPrequels } from "@/widgets/SequelsAndPrequels";

import { useMovieFetchByIdQuery } from "../api/use-movie-fetch-by-id-query";
import { MOVIE_TABS } from "../const";
import { StyledCardMoviePage } from "./styled";

const MoviePage = () => {
  const { movieDataFetch, isMovieLoading } = useMovieFetchByIdQuery();

  return isMovieLoading ? (
    <SpinnerUI />
  ) : (
    <div>
      <StyledCardMoviePage $backgroundImg={movieDataFetch?.backdrop_path}>
        <Header />

        <ErrorBoundary>
          <MovieDescription />
        </ErrorBoundary>
      </StyledCardMoviePage>
      <ErrorBoundary>
        <MovieActors />
      </ErrorBoundary>
      <NavigateTabs tabs={MOVIE_TABS} />
      <ErrorBoundary>
        <NewTrailer title="Трейлери фильму" />
      </ErrorBoundary>
      <ErrorBoundary>
        <MovieFrames />
      </ErrorBoundary>
      <ErrorBoundary>{movieDataFetch?.belongs_to_collection ? <SequelsAndPrequels /> : <PopularMovie />}</ErrorBoundary>
      <ErrorBoundary>
        <ReviewsList />
      </ErrorBoundary>
    </div>
  );
};

export default MoviePage;
