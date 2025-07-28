import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { MovieFilterByReleaseList } from "./ui/MoviFilterByReleaseList";

export const MovieFilterByRelease = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<number | null>(null);

  const handleAddUrlDate = (date: number | null) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...currentParams, releaseDate: String(date) });
    setActiveFilter(date);
  };

  return <MovieFilterByReleaseList activeFilter={activeFilter} handleAddUrlDate={handleAddUrlDate} />;
};
