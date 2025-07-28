import { useQuery } from "@tanstack/react-query";

import { movieService } from "@/bus/movie/api/movieService";
import { movieQueryKeys } from "@/bus/movie/store/queryKeys";

import type { HooksProps } from "../types";

export const useTrailerFetchQuery = ({ trailerId }: HooksProps) => {
  const {
    data: response,
    isFetching,
    isLoading,
  } = useQuery({
    queryFn: async () => {
      return movieService.trailerByIdFetch({ id: trailerId });
    },
    queryKey: [movieQueryKeys.trailerByIdFetch, trailerId],
  });

  const { data, error } = response || {};

  try {
    if (error) {
      throw error;
    }
  } catch (error) {
    console.log(error);
  }

  return { dataTrailer: data || [], loadingTrailerFetch: isFetching || isLoading };
};
