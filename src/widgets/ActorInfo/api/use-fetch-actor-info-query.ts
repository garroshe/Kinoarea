import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { actorsService } from "@/entities/actors/api/actors-service";
import { actorsQueryKeys } from "@/entities/actors/store/queryKeys";

export const useFetchActorInfoQuery = () => {
  const { id } = useParams();

  const {
    data: response,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [actorsQueryKeys.actorFetch],
    queryFn: async () => {
      return await actorsService.actorFetch({ id });
    },
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
    actorDataFetch: data,
    actorLoading: isLoading || isFetching,
  };
};
