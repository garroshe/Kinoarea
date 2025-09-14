import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { mapGenreCodeToGenre } from "@/shared/utils/map-genre-code-to-genre";

import type { IMovieCard } from "../model/types";
import { getRatingColor } from "../model/utils/getRatingColor";
import { StyledActiveBlock, StyledDescription, StyledMovieCard, StyledRating, StyledTitle } from "./styled";

export const MovieCard = ({ title = "Фільм", genre, img, rating = 5, id }: IMovieCard) => {
  const [isVisible, setIsVisible] = useState(false);
  const genreString = useMemo(() => genre?.map(mapGenreCodeToGenre).join(", "), [genre]);
  const navigate = useNavigate();

  const handleOpenBlock = () => {
    setIsVisible((prev) => !prev);
  };

  const handleNavigateToMovie = () => {
    navigate(`/films/${id}`);
  };

  return (
    <StyledMovieCard data-cy="movie-card" data-testid="movie-card" onClick={handleOpenBlock}>
      <StyledRating $bg={getRatingColor(rating)}>{rating}</StyledRating>
      <img src={img} alt={title} loading="lazy" />
      {isVisible && (
        <StyledActiveBlock data-testid="active-block" onClick={handleNavigateToMovie}>
          <p data-cy="movie-card-btn">Картка фільма</p>
        </StyledActiveBlock>
      )}
      <div>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{genreString}</StyledDescription>
      </div>
    </StyledMovieCard>
  );
};
