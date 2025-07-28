import { useState } from "react";

import { routesBook } from "@/app/routing/routesBook";
import { MovieCard } from "@/features/movieCard/MovieCard";
import { MovieFilterByGenre } from "@/features/movieFilterByGenre/MovieFilterByGenre";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { BurgerFilterUI } from "@/shared/ui/BurgerFilterUI/BurgerFilterUI";
import { CenteredContentUI } from "@/shared/ui/CenteredContentUI/CenteredContentUI";
import { ContainerUI } from "@/shared/ui/ContainerUI/ContainerUI";
import { DividerUI } from "@/shared/ui/DividerUI/DividerUI";
import { MovieNotFound } from "@/shared/ui/MovieNotFoundUI/MovieNotFound";
import { NavigateButtonUI } from "@/shared/ui/NavigateButtonUI/ui/NavigateButtonUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI/SpinnerUI";
import { TitleUI } from "@/shared/ui/TitleUI/TitleUI";
import { getPathToImg } from "@/shared/utils/get-path-to-img";

import { useMoviesNowPlayingFetch } from "./model/use-movies-now-playing-fetch";
import { StyledCards, StyledNowPlaying, StyledNowPlayingWrapper } from "./styled";

export const NowPlaying = () => {
  const [activeFilters, setActiveFilters] = useState(false);
  const { movieDataFetch, isMovieLoading } = useMoviesNowPlayingFetch();
  const isDesktop = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 480px)");

  const handleActiveFiltersChange = () => {
    setActiveFilters(true);
  };

  return (
    <StyledNowPlaying>
      <ContainerUI>
        <div className="bg-main" />
        <StyledNowPlayingWrapper>
          <TitleUI fontWeight={900} fontSize={65} title="Зараз у кіно" />
          {!isDesktop ? <DividerUI /> : null}
          {isMobile && !activeFilters && <BurgerFilterUI onClick={handleActiveFiltersChange} />}
          {!isMobile && <MovieFilterByGenre />}
        </StyledNowPlayingWrapper>
        {activeFilters && <MovieFilterByGenre />}

        {!isMovieLoading && movieDataFetch?.length === 0 && <MovieNotFound />}

        {isMovieLoading ? (
          <CenteredContentUI testId="now-playing-spinner">
            <SpinnerUI size="large" />
          </CenteredContentUI>
        ) : (
          <StyledCards>
            {movieDataFetch?.map((item) => {
              return (
                <MovieCard
                  title={item.title}
                  genre={item.genre_ids}
                  img={getPathToImg(item.poster_path, 500)}
                  rating={Number(item.vote_average?.toFixed(1))}
                  key={item.id}
                  originalTitle={item.original_title}
                />
              );
            })}
          </StyledCards>
        )}

        <NavigateButtonUI to={routesBook.posters()} title="Всі новинки" />
      </ContainerUI>
    </StyledNowPlaying>
  );
};
