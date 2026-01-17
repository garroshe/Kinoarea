import { useNavigate } from "react-router-dom";

import { GridImages } from "@/features/GridImages";
import { routesBook } from "@/shared/routing/routesBook";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { MediaSectionHeader } from "@/shared/ui/MediaSectionHeader";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";

import { useFramesFetchQueryById } from "../api/use-frames-fetch-query-by-id";
import { useMovieFetchByIdQuery } from "../api/use-movie-fetch-by-id-query";
import { StyledMovieFrames } from "./styled";

export const MovieFrames = () => {
  const { movieImagesFetch, isMovieImagesLoading } = useFramesFetchQueryById();
  const { movieDataFetch, isMovieLoading } = useMovieFetchByIdQuery();

  const navigate = useNavigate();

  const handleRedirectToAllPosters = () => {
    navigate(routesBook.posters());
  };

  const { backdrops } = movieImagesFetch || {};

  if (isMovieImagesLoading || isMovieLoading) {
    return <SpinnerUI />;
  }

  return (
    <StyledMovieFrames id="movie-frames">
      <ContainerUI>
        <MediaSectionHeader
          title="Кадри з фільму"
          actionLabel="Усі постери"
          onActionClick={handleRedirectToAllPosters}
          subtitle={String(movieDataFetch?.title)}
        />
        <GridImages images={backdrops} />
      </ContainerUI>
    </StyledMovieFrames>
  );
};
