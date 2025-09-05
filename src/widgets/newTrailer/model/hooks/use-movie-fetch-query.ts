import { useQuery } from "@tanstack/react-query";

import { movieService } from "@/entities/movie/api/movieService";
import { movieQueryKeys } from "@/entities/movie/store/queryKeys";

import type { HooksProps } from "../../model/types";

export const useMovieFetchQuery = ({ trailerId }: HooksProps) => {
  const {
    data: response,
    isFetching,
    isLoading,
  } = useQuery({
    queryFn: async () => {
      return movieService.movieByIdFetch({ id: trailerId });
    },
    queryKey: [movieQueryKeys.movieByIdFetch, trailerId],
  });

  const { data, error } = response || {};

  try {
    if (error) {
      throw error;
    }
  } catch (error) {
    console.log(error);
  }

  return {
    dataMovieFetch: data,
    loadingMovieFetch: isFetching || isLoading,
  };
};
