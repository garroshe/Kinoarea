import { useState } from "react";

import { MovieFilterByRelease } from "@/features/MovieFilterByRelease";
import { SliderWithMovie } from "@/features/SliderWithMovieCard";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { BurgerButtonUI } from "@/shared/ui/BurgerButtonUI";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { DividerUI } from "@/shared/ui/DividerUI";

import { useMovieByReleaseFetchQuery } from "../api/use-movie-by-release-fetch-query";
import { StyledHeader, StyledPopularMovie, StyledTitle } from "./styled";

export const PopularMovie = () => {
  const [activeFilter, setActiveFilter] = useState(false);

  const { movieDataFetch, isMovieLoading } = useMovieByReleaseFetchQuery();

  const isLaptop = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 480px)");

  const handleActiveFiltersChange = () => {
    setActiveFilter(true);
  };

  return (
    <ContainerUI>
      <StyledPopularMovie>
        <StyledHeader>
          <StyledTitle>Популярні фільми</StyledTitle>
          {!isLaptop && <DividerUI />}
          {isMobile && !activeFilter && <BurgerButtonUI onClick={handleActiveFiltersChange} />}
          {!isMobile && <MovieFilterByRelease />}
        </StyledHeader>
        {activeFilter && <MovieFilterByRelease />}
        <SliderWithMovie isMovieLoading={isMovieLoading} movieData={movieDataFetch} />
      </StyledPopularMovie>
    </ContainerUI>
  );
};
