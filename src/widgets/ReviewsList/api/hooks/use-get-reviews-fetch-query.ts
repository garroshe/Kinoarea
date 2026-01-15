import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { movieService } from "@/entities/movie/api/movie-service";
import { movieQueryKeys } from "@/entities/movie/store/query-keys";

export const useGetReviewsFetchQuery = () => {
  const { id } = useParams();

  const {
    data: response,
    isFetching,
    isLoading,
  } = useQuery({
    queryFn: async () => {
      return await movieService.movieReviewsFetch({ id });
    },
    queryKey: [movieQueryKeys.movieReviewsFetch, id],
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
    isMovieReviewsLoading: isLoading || isFetching,
    movieReviewsFetch: data || [],
  };
};
