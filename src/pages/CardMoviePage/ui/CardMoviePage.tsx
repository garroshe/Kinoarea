import { MovieTabs } from "@/features/MovieTabs";
import ErrorBoundary from "@/shared/ui/ErrorBoundaryUI/ErrorBoundaryUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";
import { getPathToImg } from "@/shared/utils/get-path-to-img";
import { Header } from "@/widgets/Header";
import { MovieActors } from "@/widgets/MovieActors";
import { MovieDescription } from "@/widgets/MovieDescription";
import { MovieFrames } from "@/widgets/MovieFrames";
import { NewTrailer } from "@/widgets/NewTrailer";
import { PopularMovie } from "@/widgets/PopularMovie";
import { ReviewsList } from "@/widgets/ReviewsList";
import { SequelsAndPrequels } from "@/widgets/SequelsAndPrequels";

import { useMovieFetchByIdQuery } from "../api/use-movie-fetch-by-id-query";
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

export default CardMoviePage;
