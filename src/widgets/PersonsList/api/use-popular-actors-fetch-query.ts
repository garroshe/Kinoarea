import { useQuery } from "@tanstack/react-query";

import { actorsService } from "@/entities/actors/api/actors-service";
import { actorsQueryKeys } from "@/entities/actors/store/queryKeys";

import { ITEMS_PER_PAGE, MAX_PAGES } from "../const";

type UsePopularActorsFetchQueryPropsType = {
  page: number;
};

export const usePopularActorsFetchQuery = ({ page }: UsePopularActorsFetchQueryPropsType) => {
  const {
    data: response,
    isFetching,
    error: serviceError,
    isLoading,
  } = useQuery({
    queryFn: async () => {
      return await actorsService.popularActorsFetch({ page });
    },
    queryKey: [actorsQueryKeys.popularActorsFetch, page],
  });

  const { data, error: queryError } = response || {};

  const totalActors = Math.min(data?.total_pages ?? 0, MAX_PAGES) * ITEMS_PER_PAGE;

  return {
    isActorsLoading: isLoading || isFetching,
    actorsData: data?.results || [],
    error: queryError || serviceError,
    totalActors,
  };
};
