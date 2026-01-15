import { useState } from "react";

import { MovieFilterByRelease } from "@/features/movieFilterByRelease";
import { SliderWithMovie } from "@/features/sliderWithMovieCard";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { BurgerFilterUI } from "@/shared/ui/BurgerFilterUI";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { DividerUI } from "@/shared/ui/DividerUI";
import { TitleUI } from "@/shared/ui/TitleUI";
import { useMovieByReleaseFetchQuery } from "@/widgets/PopularMovie/api/use-movie-by-release-fetch-query";

import { StyledHeader, StyledPopularMovie } from "./styled";

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
          <TitleUI title="Популярні фільми" fontSize={65} />
          {!isLaptop && <DividerUI />}
          {isMobile && !activeFilter && <BurgerFilterUI onClick={handleActiveFiltersChange} />}
          {!isMobile && <MovieFilterByRelease />}
        </StyledHeader>
        {activeFilter && <MovieFilterByRelease />}
        <SliderWithMovie isMovieLoading={isMovieLoading} movieData={movieDataFetch} />
      </StyledPopularMovie>
    </ContainerUI>
  );
};
