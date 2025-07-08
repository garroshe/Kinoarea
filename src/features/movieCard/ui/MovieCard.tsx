import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { mapGenreCodeToGenre } from "../../../shared/utils/map-genre-code-to-genre";
import type { IMovieCard } from "../model/types";
import { getRatingColor } from "../model/utils/getRatingColor";
import { StyledActiveBlock, StyledDescription, StyledMovieCard, StyledRating, StyledTitle } from "./styled";

export const MovieCard = ({ title, genre, img, rating, originalTitle }: IMovieCard) => {
  const [isVisible, setIsVisible] = useState(false);
  const genreString = useMemo(() => genre.map(mapGenreCodeToGenre).join(", "), [genre]);

  const handleOpenBlock = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <StyledMovieCard data-cy="movie-card" data-testid="movie-card" onClick={handleOpenBlock}>
      <StyledRating $bg={getRatingColor(rating)}>{rating}</StyledRating>
      <img src={img} alt={title} />
      {isVisible && (
        <StyledActiveBlock data-testid="active-block">
          <Link data-cy="movie-card-btn" to={`/films/${encodeURIComponent(originalTitle)}`}>
            Картка фільма
          </Link>
        </StyledActiveBlock>
      )}
      <div>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{genreString}</StyledDescription>
      </div>
    </StyledMovieCard>
  );
};
