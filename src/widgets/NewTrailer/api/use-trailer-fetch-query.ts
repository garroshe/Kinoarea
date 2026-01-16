import { useQuery } from "@tanstack/react-query";

import { movieService } from "@/entities/movie/api/movie-service";
import { movieQueryKeys } from "@/entities/movie/store/query-keys";

type HooksPropsType = {
  trailerId?: string | null;
};

export const useTrailerFetchQuery = ({ trailerId }: HooksPropsType) => {
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
