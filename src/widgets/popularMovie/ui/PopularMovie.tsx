import { useState } from "react";

import { MovieFilterByRelease } from "@/features/movieFilterByRelease/ui/MovieFilterByRelease";
import { SliderWithMovieByRelease } from "@/features/sliderWithMovieByRelease/ui/SliderWithMovieByRelease";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { BurgerFilterUI } from "@/shared/ui/BurgerFilterUI/BurgerFilterUI";
import { ContainerUI } from "@/shared/ui/ContainerUI/ContainerUI";
import { DividerUI } from "@/shared/ui/DividerUI/DividerUI";
import { TitleUI } from "@/shared/ui/TitleUI/TitleUI";

import { StyledHeader, StyledPopularMovie } from "./styled";

const PopularMovie = () => {
  const [activeFilter, setActiveFilter] = useState(false);

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
        <SliderWithMovieByRelease />
      </StyledPopularMovie>
    </ContainerUI>
  );
};

export default PopularMovie;
