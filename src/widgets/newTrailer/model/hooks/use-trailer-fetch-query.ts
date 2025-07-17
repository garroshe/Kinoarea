import { useQuery } from "@tanstack/react-query";

import { movieService } from "@/bus/movie/api/movieService";
import { movieQueryKeys } from "@/bus/movie/store/queryKeys";

import type { HooksProps } from "./types";

export const useTrailerFetchQuery = ({ trailerId = "541671" }: HooksProps) => {
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

  console.log(data);

  const trailers = (data ?? []).filter((trailer) => trailer..type === "Trailer" && trailer.site === "YouTube");

  try {
    if (error) {
      throw error;
    }
  } catch (error) {
    console.log(error);
  }

  return { dataTrailer: trailers[0], loadingTrailerFetch: isFetching || isLoading };
};
