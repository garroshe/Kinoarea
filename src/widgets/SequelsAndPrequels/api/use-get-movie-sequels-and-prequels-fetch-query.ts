import { useQuery } from "@tanstack/react-query";

import { movieService } from "@/entities/movie/api/movie-service";
import { movieQueryKeys } from "@/entities/movie/store/query-keys";

export const useGetMovieSequelsAndPrequels = ({ id }: { id?: number | null }) => {
  const {
    data: response,
    isFetching,
    isLoading,
  } = useQuery({
    queryFn: async () => {
      return await movieService.movieSequelsAndPrequelsFetch({ id });
    },
    queryKey: [movieQueryKeys.movieSequelsAndPrequelsFetch, id],
  });

  const { data, error } = response || {};

  try {
    if (error) {
      throw error;
    }
  } catch (error) {
    console.error(error);
  }

  return {
    movieSequelsAndPrequelsFetch: data,
    movieSequelsAndPrequelsLoading: isLoading || isFetching,
  };
};
