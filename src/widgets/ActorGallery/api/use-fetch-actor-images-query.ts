import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { actorsService } from "@/entities/actors/api/actors-service";
import { actorsQueryKeys } from "@/entities/actors/store/queryKeys";

export const useFetchActorImagesQuery = () => {
  const { id } = useParams();

  const {
    data: response,
    isLoading,
    isFetching,
    error: queryError,
  } = useQuery({
    queryFn: async () => {
      return await actorsService.actorImagesFetch({ id });
    },
    queryKey: [actorsQueryKeys.actorImagesFetch, id],
  });

  const { data, error: serviceError } = response || {};

  return {
    isImagesLoading: isLoading || isFetching,
    imagesDataFetch: data,
    imagesError: serviceError || queryError,
  };
};
