import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MovieCard } from "@/features/movieCard";
import { MovieFilterByGenre } from "@/features/movieFilterByGenre";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { routesBook } from "@/shared/routing/routesBook";
import { BurgerFilterUI } from "@/shared/ui/BurgerFilterUI";
import { CenteredContentUI } from "@/shared/ui/CenteredContentUI";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { DividerUI } from "@/shared/ui/DividerUI";
import { MovieNotFound } from "@/shared/ui/MovieNotFoundUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";
import { TitleUI } from "@/shared/ui/TitleUI";
import { getPathToImg } from "@/shared/utils/get-path-to-img";

import { useMoviesNowPlayingFetch } from "../model/use-movies-now-playing-fetch";
import { StyledAllNewsButton, StyledCards, StyledNowPlaying, StyledNowPlayingWrapper } from "./styled";

export const NowPlaying = () => {
  const [activeFilters, setActiveFilters] = useState(false);
  const { movieDataFetch, isMovieLoading } = useMoviesNowPlayingFetch();
  const isDesktop = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 480px)");

  const navigate = useNavigate();

  const handleActiveFiltersChange = () => {
    setActiveFilters(true);
  };

  const handleOpenAllNews = () => {
    navigate(routesBook.films());
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
                  id={item.id}
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

        <StyledAllNewsButton onClick={handleOpenAllNews}>Всі новинки</StyledAllNewsButton>
      </ContainerUI>
    </StyledNowPlaying>
  );
};
