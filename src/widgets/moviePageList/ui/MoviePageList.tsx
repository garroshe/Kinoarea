import { useState } from "react";

import { MovieListCard } from "@/features/movieListCard";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { TitleUI } from "@/shared/ui/TitleUI";
import { getPathToImg } from "@/shared/utils/get-path-to-img";

import { useFetchMoviesQuery } from "../api/hooks/use-fetch-movies-query";
import { DEFAULT_SELECT_VALUE, SELECT_CONSTANTS } from "../model/constants";
import { StyledHeader, StyledMoreButton, StyledMoviePageList, StyledSelector } from "./styled";

export const MoviePageList = () => {
  const [sortBy, setSortBy] = useState(DEFAULT_SELECT_VALUE);

  const { movies, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useFetchMoviesQuery({ sortBy });

  const handleShowMore = async () => {
    await fetchNextPage();
  };

  const handleSelectFilter = (value: string) => {
    setSortBy(value);
  };

  return (
    <ContainerUI>
      <StyledMoviePageList>
        <StyledHeader>
          <TitleUI title="Фільми" fontSize={65} fontWeight={900} />
          <StyledSelector onChange={(e) => handleSelectFilter(e.target.value)}>
            {SELECT_CONSTANTS.map((item, i) => (
              <option key={i} value={item.value}>
                {item.label}
              </option>
            ))}
          </StyledSelector>
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
