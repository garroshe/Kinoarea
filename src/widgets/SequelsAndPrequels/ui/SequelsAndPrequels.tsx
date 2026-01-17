import { SliderWithMovie } from "@/features/SliderWithMovieCard";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";

import { useGetMovieFetchQuery } from "../api/use-get-movie-fetch-query";
import { useGetMovieSequelsAndPrequels } from "../api/use-get-movie-sequels-and-prequels-fetch-query";
import { StyledTitle } from "./styled";

export const SequelsAndPrequels = () => {
  const { movieDataFetch, movieLoading } = useGetMovieFetchQuery();
  const { movieSequelsAndPrequelsLoading, movieSequelsAndPrequelsFetch } = useGetMovieSequelsAndPrequels({
    id: movieDataFetch?.belongs_to_collection?.id,
  });

  const isLoading = movieSequelsAndPrequelsLoading || movieLoading;

  if (movieSequelsAndPrequelsLoading || movieLoading) {
    return (
      <ContainerUI>
        <SpinnerUI />
      </ContainerUI>
    );
  }

  return (
    <ContainerUI>
      <div>
        <StyledTitle>Сіквели та приквели</StyledTitle>
        <SliderWithMovie isMovieLoading={isLoading} movieData={movieSequelsAndPrequelsFetch?.parts} />
      </div>
    </ContainerUI>
  );
};
