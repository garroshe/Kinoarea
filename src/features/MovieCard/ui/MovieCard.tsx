import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getRatingColor } from "@/features/MovieCard/lib/getRatingColor";
import { mapGenreCodeToGenre } from "@/shared/utils/map-genre-code-to-genre";

import { StyledActiveBlock, StyledDescription, StyledMovieCard, StyledRating, StyledTitle } from "./styled";

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
      <StyledRating $bg={getRatingColor(rating)}>{rating}</StyledRating>
      <img src={img} alt={title} loading="lazy" />
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
