import { MovieFilterByRelease } from "@/features/movieFilterByRelease/ui/MovieFilterByRelease";
import { SliderWithMovieByRelease } from "@/features/sliderWithMovieByRelease/ui/SliderWithMovieByRelease";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { ContainerUI } from "@/shared/ui/ContainerUI/ContainerUI";
import { DividerUI } from "@/shared/ui/DividerUI/DividerUI";
import { TitleUI } from "@/shared/ui/TitleUI/TitleUI";

import { StyledHeader, StyledPopularMovie } from "./styled";

const PopularMovie = () => {
  const isLaptop = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 480px)");

  return (
    <ContainerUI>
      <StyledPopularMovie>
        <StyledHeader>
          <TitleUI title="Популярні фільми" fontSize={65} />
          {!isLaptop && <DividerUI />}
          {!isMobile && <MovieFilterByRelease />}
        </StyledHeader>
        <SliderWithMovieByRelease />
      </StyledPopularMovie>
    </ContainerUI>
  );
};

export default PopularMovie;
