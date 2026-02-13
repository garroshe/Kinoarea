import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { getRatingColor } from "@/features/MovieCard/lib/getRatingColor";
import { SearchImagePlaceholder } from "@/features/Search/ui/SearchImagePlaceholder";
import { getPathToImg } from "@/shared/utils/get-path-to-img";
import { mapGenreCodeToGenre } from "@/shared/utils/map-genre-code-to-genre";

import {
  StyledGenres,
  StyledImg,
  StyledRating,
  StyledSearchMovieCard,
  StyledSubTitle,
  StyledTitle,
  StyledWrapper,
} from "./styled";

type SearchMovieCardPropsType = {
  id: number;
  img: string;
  title: string;
  originalTitle: string;
  rating: number;
  genres: number[];
};

export const SearchMovieCard = ({ img, rating, genres, originalTitle, title, id }: SearchMovieCardPropsType) => {
  const navigate = useNavigate();

  const handleNavigateToMovie = () => {
    navigate(`/films/${id}`);
  };

  const genreString = useMemo(() => genres?.map(mapGenreCodeToGenre).join(", "), [genres]);

  return (
    <StyledSearchMovieCard onClick={handleNavigateToMovie}>
      <StyledWrapper>
        <StyledImg>
          {img ? (
            <img onClick={handleNavigateToMovie} src={getPathToImg(img)} alt={title} loading="lazy" />
          ) : (
            <SearchImagePlaceholder text="Немає постера" />
          )}
        </StyledImg>
        <div>
          <StyledTitle onClick={handleNavigateToMovie}>{title}</StyledTitle>
          <StyledSubTitle>{originalTitle}</StyledSubTitle>
          <StyledGenres>{genreString}</StyledGenres>
        </div>
      </StyledWrapper>
      <StyledRating $bg={getRatingColor(Number(rating?.toFixed(1)))}>{Number(rating?.toFixed(1))}</StyledRating>
    </StyledSearchMovieCard>
  );
};
