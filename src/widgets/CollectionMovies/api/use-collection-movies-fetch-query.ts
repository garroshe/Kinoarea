import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { movieService } from "@/entities/movie/api/movie-service";
import { movieQueryKeys } from "@/entities/movie/store/query-keys";

import { COLLECTION_LIST_CONFIG_MAP } from "../const";
import type { CollectionKeyType } from "../model/types";

type useCollectionMoviesFetchQueryPropsType = {
  page: number;
};

export const useCollectionMoviesFetchQuery = ({ page }: useCollectionMoviesFetchQueryPropsType) => {
  const [isIdNotFound, setIsIdNotFound] = useState<boolean>(false);

  const { id } = useParams<{ id: CollectionKeyType }>();

  if (!id) {
    setIsIdNotFound(true);
    return { isLoading: false, error: true, moviesData: null };
  }

  const { endpoint, params } = COLLECTION_LIST_CONFIG_MAP[id];

  const {
    data: response,
    isFetching,
    isLoading,
    error: serviceError,
  } = useQuery({
    queryFn: async () => {
      return await movieService.collectionMoviesFetch({ endpoint, page, params });
    },
    queryKey: [movieQueryKeys.collectionMoviesFetch, id, page],
  });

  const { data, error: queryError } = response || {};

  return {
    isLoading: isFetching || isLoading,
    error: isIdNotFound || serviceError || queryError,
    moviesData: data,
  };
};
