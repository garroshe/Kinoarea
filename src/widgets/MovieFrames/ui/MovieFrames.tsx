import { GridImages } from "@/features/gridImages";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { MediaSectionHeader } from "@/shared/ui/MediaSectionHeader";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";

import { useFramesFetchQueryById } from "../model/hooks/use-frames-fetch-query-by-id";
import { useMovieFetchByIdQuery } from "../model/hooks/use-movie-fetch-by-id-query";
import { StyledMovieFrames } from "./styled";

export const MovieFrames = () => {
  const { movieImagesFetch, isMovieImagesLoading } = useFramesFetchQueryById();
  const { movieDataFetch, isMovieLoading } = useMovieFetchByIdQuery();

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
          onActionClick={() => console.log("redirect to all posters")}
          subtitle={String(movieDataFetch?.title)}
        />
        <GridImages images={backdrops} />
      </ContainerUI>
    </StyledMovieFrames>
  );
};
