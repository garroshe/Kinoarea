import { useMutation } from "@tanstack/react-query";

import { movieService } from "@/entities/movie/api/movie-service";
import { movieQueryKeys } from "@/entities/movie/store/query-keys";
import type { ReviewType } from "@/entities/movie/types";

export const useFetchReviewsMutation = () => {
  const { isPending, mutate } = useMutation({
    mutationKey: [movieQueryKeys.movieReviewsFetchMutation],
    mutationFn: async (data: Omit<ReviewType, "id">) => {
      return await movieService.movieReviewsFetchMutation(data);
    },
  });

  return { mutate, isPending };
};
