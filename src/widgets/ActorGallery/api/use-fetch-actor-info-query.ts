import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { actorsService } from "@/entities/actors/api/actors-service";
import { actorsQueryKeys } from "@/entities/actors/store/queryKeys";

export const useFetchActorInfoQuery = () => {
  const { id } = useParams();

  const {
    data: response,
    isFetching,
    isLoading,
    error: queryError,
  } = useQuery({
    queryFn: async () => {
      return await actorsService.actorFetch({ id });
    },
    queryKey: [actorsQueryKeys.actorFetch, id],
  });

  const { data, error: serviceError } = response || {};

  return {
    actorInfoData: data,
    isActorInfoLoading: isLoading || isFetching,
    actorInfoError: serviceError || queryError,
  };
};
