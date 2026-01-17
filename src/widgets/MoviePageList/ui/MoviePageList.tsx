import { useState } from "react";

import { MovieListCard } from "@/features/MovieListCard";
import { DEFAULT_SELECT_VALUE, SELECTOR_OPTIONS } from "@/shared/constants";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { SelectorUI } from "@/shared/ui/SelectorUI";
import { getPathToImg } from "@/shared/utils/get-path-to-img";

import { useFetchMoviesQuery } from "../api/use-fetch-movies-query";
import { StyledHeader, StyledMoreButton, StyledMoviePageList, StyledTitle } from "./styled";

export const MoviePageList = () => {
  const [sortBy, setSortBy] = useState(DEFAULT_SELECT_VALUE);

  const { movies, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useFetchMoviesQuery({ sortBy });

  const handleShowMore = async () => {
    await fetchNextPage();
  };

  return (
    <ContainerUI>
      <StyledMoviePageList>
        <StyledHeader>
          <StyledTitle>Фільми</StyledTitle>
          <SelectorUI options={SELECTOR_OPTIONS} onChange={setSortBy} />
        </StyledHeader>
        <div>
          {movies?.map((item) => (
            <MovieListCard
              key={item.id}
              poster={getPathToImg(item.poster_path)}
              id={item.id}
              title={item.title}
              genre={item.genre_ids}
              vote_average={item.vote_average}
              releaseDate={item.release_date}
            />
          ))}
        </div>
        <StyledMoreButton disabled={!hasNextPage || isFetchingNextPage || isLoading} onClick={handleShowMore}>
          Показати більше
        </StyledMoreButton>
      </StyledMoviePageList>
    </ContainerUI>
  );
};
