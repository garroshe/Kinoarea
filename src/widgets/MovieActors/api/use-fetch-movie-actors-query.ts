import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { actorsService } from "@/entities/actors/api/actors-service";
import { actorsQueryKeys } from "@/entities/actors/store/queryKeys";

export const useFetchMovieActors = () => {
  const { id } = useParams();

  const {
    data: response,
    isFetching,
    isLoading,
  } = useQuery({
    queryFn: async () => {
      return actorsService.movieActorsFetch({ id });
    },
    queryKey: [actorsQueryKeys.movieActorsFetch, id],
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
    movieActorsDataFetch: data,
    isMovieActorsLoading: isLoading || isFetching,
  };
};
