import { useState } from "react";
import { Pagination } from "antd";
import { useParams } from "react-router-dom";

import { Breadcrumbs } from "@/features/Breadcrumbs";
import { MovieListCard } from "@/features/MovieListCard";
import { routesBook } from "@/shared/routing/routesBook";
import { CenteredContentUI } from "@/shared/ui/CenteredContentUI";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { ErrorStateUI } from "@/shared/ui/ErrorStateUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";

import { useCollectionMoviesFetchQuery } from "../api/use-collection-movies-fetch-query";
import { COLLECTION_LIST_CONFIG_MAP } from "../const";
import type { CollectionKeyType } from "../model/types";
import { StyledCollectionMovie, StyledMoviesWrapper, StyledTitle } from "@/widgets/CollectionMovies/ui/styled";

export const CollectionMovies = () => {
  const [page, setPage] = useState(1);

  const { moviesData, isLoading, error } = useCollectionMoviesFetchQuery({ page });

  const { id } = useParams<{ id: CollectionKeyType }>();

  if (!id) {
    return <ErrorStateUI />;
  }

  const collectionName = COLLECTION_LIST_CONFIG_MAP[id].title;
  const collectionTotalMovies = COLLECTION_LIST_CONFIG_MAP[id].limit;

  return (
    <StyledCollectionMovie>
      <ContainerUI>
        <StyledTitle>{collectionName}</StyledTitle>
        <Breadcrumbs
          path={[
            { label: "Добірки", isLast: false, to: routesBook.collections() },
            { label: collectionName, isLast: true, to: "" },
          ]}
        />
        {isLoading ? (
          <CenteredContentUI>
            <SpinnerUI size="large" />
          </CenteredContentUI>
        ) : error ? (
          <ErrorStateUI />
        ) : (
          <StyledMoviesWrapper>
            {moviesData?.map((movie) => {
              return (
                <MovieListCard
                  key={movie.id}
                  id={movie.id}
                  genre={movie.genre_ids}
                  title={movie.title}
                  releaseDate={movie.release_date}
                  poster={movie.poster_path}
                  vote_average={movie.vote_average}
                />
              );
            })}
          </StyledMoviesWrapper>
        )}
        <Pagination
          disabled={isLoading}
          current={page}
          pageSize={20}
          defaultCurrent={1}
          onChange={setPage}
          total={collectionTotalMovies}
          align="center"
        />
      </ContainerUI>
    </StyledCollectionMovie>
  );
};
