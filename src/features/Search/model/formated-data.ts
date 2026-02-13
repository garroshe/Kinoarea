import type { MultiSearchResultType } from "@/entities/search/types";

export const formatData = (searchData: MultiSearchResultType[] | null | undefined) => {
  const movieData = searchData?.filter((item) => item.media_type === "movie");
  const personData = searchData?.filter((item) => item.media_type === "person");

  return {
    movieData,
    personData,
  };
};
