import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getRatingColor } from "@/features/MovieCard/lib/getRatingColor";
import { MovieCardPlaceholderUI } from "@/shared/ui/MovieCardPlaceholderUI";
import { getPathToImg } from "@/shared/utils/get-path-to-img";
import { mapGenreCodeToGenre } from "@/shared/utils/map-genre-code-to-genre";

import {
  StyledActiveBlock,
  StyledDescription,
  StyledMovieCard,
  StyledPoster,
  StyledRating,
  StyledTitle,
} from "./styled";

export type MovieCardType = {
  title?: string;
  rating?: number;
  img?: string;
  genre?: number[];
  originalTitle?: string;
  id?: number;
};

export const MovieCard = ({ title = "Фільм", genre, img, rating = 5, id }: MovieCardType) => {
  const [isVisible, setIsVisible] = useState(false);
  const genreString = useMemo(() => genre?.map(mapGenreCodeToGenre).join(", "), [genre]);
  const navigate = useNavigate();

  const handleOpenBlock = () => {
    setIsVisible(true);
  };

  const handleCloseBlock = () => {
    setIsVisible(false);
  };

  const handleNavigateToMovie = () => {
    navigate(`/films/${id}`);
  };

  return (
    <StyledMovieCard
      data-cy="movie-card"
      data-testid="movie-card"
      onMouseEnter={handleOpenBlock}
      onMouseLeave={handleCloseBlock}
      onClick={handleNavigateToMovie}
    >
      <StyledRating $bg={getRatingColor(Number(rating?.toFixed(1)))}>{Number(rating?.toFixed(1))}</StyledRating>
      <StyledPoster>
        {img ? (
          <img src={getPathToImg(img, 500)} alt={title} loading="lazy" />
        ) : (
          <MovieCardPlaceholderUI size="large" />
        )}
      </StyledPoster>
      <StyledActiveBlock $visible={isVisible} data-testid="active-block" onClick={handleNavigateToMovie}>
        <p data-cy="movie-card-btn">Картка фільма</p>
      </StyledActiveBlock>
      <div>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{genreString}</StyledDescription>
      </div>
    </StyledMovieCard>
  );
};
