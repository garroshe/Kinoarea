import { SliderWithMovie } from "@/features/sliderWithMovieCard";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";
import { TitleUI } from "@/shared/ui/TitleUI";

import { useGetMovieFetchQuery } from "../api/hooks/use-get-movie-fetch-query";
import { useGetMovieSequelsAndPrequels } from "../api/hooks/use-get-movie-sequels-and-prequels-fetch-query";
import { StyledSequelsAndPrequels } from "./styled";

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
      <StyledSequelsAndPrequels>
        <TitleUI textAlign="center" title="Сіквели та приквели" fontSize={65} marginTop={73} marginBottom={63} />
        <SliderWithMovie isMovieLoading={isLoading} movieData={movieSequelsAndPrequelsFetch?.parts} />
      </StyledSequelsAndPrequels>
    </ContainerUI>
  );
};
