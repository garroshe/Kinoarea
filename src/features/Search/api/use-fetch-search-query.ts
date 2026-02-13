import { useQuery } from "@tanstack/react-query";

import { searchService } from "@/entities/search/api/search-service";
import { searchKeys } from "@/entities/search/store/search-keys";

type UseFetchSearchQueryPropsType = {
  query?: string;
};

export const useFetchSearchQuery = ({ query }: UseFetchSearchQueryPropsType) => {
  const {
    data: response,
    isFetching,
    isLoading,
    error: serviceError,
  } = useQuery({
    queryFn: async () => {
      return await searchService.searchMulti({ query });
    },
    queryKey: [searchKeys.searchMulti, query],
  });

  const { data, error: queryError } = response || {};

  return {
    searchData: data,
    isLoading: isLoading || isFetching,
    error: queryError,
    serviceError,
  };
};
