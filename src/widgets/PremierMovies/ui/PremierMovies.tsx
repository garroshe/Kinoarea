import { useState } from "react";
import { Pagination } from "antd";

import { MovieCard } from "@/features/MovieCard";
import { CenteredContentUI } from "@/shared/ui/CenteredContentUI";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { ErrorStateUI } from "@/shared/ui/ErrorStateUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";

import { useNowPlayingMoviesFetchQuery } from "../api/use-now-playing-movies-fetch-query";
import { StyledCards, StyledPremierMovies, StyledTitle } from "./styled";

export const PremierMovies = () => {
  const [page, setPage] = useState(1);

  const { isLoading, moviesData, error } = useNowPlayingMoviesFetchQuery({ page });

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <StyledPremierMovies>
      <ContainerUI>
        <StyledTitle>Фільми які вже вийшли</StyledTitle>
        {error ? (
          <ErrorStateUI />
        ) : isLoading ? (
          <CenteredContentUI>
            <SpinnerUI size="large" />
          </CenteredContentUI>
        ) : (
          <StyledCards>
            {moviesData.map((movie) => {
              return (
                <MovieCard
                  id={movie.id}
                  key={movie.id}
                  title={movie.title}
                  genre={movie.genre_ids}
                  img={movie.poster_path}
                  rating={movie.vote_average}
                  originalTitle={movie.original_title}
                />
              );
            })}
          </StyledCards>
        )}
        <Pagination
          disabled={isLoading}
          align="center"
          onChange={handlePageChange}
          total={500}
          pageSize={20}
          current={page}
          defaultCurrent={1}
        />
      </ContainerUI>
    </StyledPremierMovies>
  );
};
