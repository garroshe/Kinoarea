import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { mapGenreCodeToGenre } from "@/shared/utils/map-genre-code-to-genre";
import { mapRatingToColorCircle } from "@/shared/utils/map-rating-to-color-circle";

import {
  StyledButton,
  StyledGenre,
  StyledImg,
  StyledInfo,
  StyledMovieListCard,
  StyledRating,
  StyledRatingsWrapper,
  StyledRatingTitle,
  StyledRatingWrapper,
  StyledReleaseDate,
  StyledTitle,
  StyledWrapper,
} from "./styled";

type MovieListCardPropsType = {
  title?: string;
  poster?: string;
  genre?: number[];
  releaseDate?: string;
  id?: string | number;
  vote_average?: number;
};

export const MovieListCard = ({ title, releaseDate, poster, genre, id, vote_average }: MovieListCardPropsType) => {
  const navigate = useNavigate();

  const isDesktop = useMediaQuery("(max-width: 1140px)");

  const handleNavigateToMovie = () => {
    navigate(`/films/${id}`);
  };

  const genreString = useMemo(() => genre?.map(mapGenreCodeToGenre).join(", "), [genre]);
  const ratingKinoarea = Number(vote_average) !== 10 ? Number(vote_average) + 0.8 : vote_average;

  return (
    <StyledMovieListCard>
      <StyledImg src={poster} alt={title} onClick={handleNavigateToMovie} />
      <StyledWrapper>
        <StyledInfo>
          <StyledTitle onClick={handleNavigateToMovie}>{title}</StyledTitle>
          <StyledReleaseDate>{releaseDate}</StyledReleaseDate>
          <StyledGenre>{!isDesktop ? genreString : genreString?.slice(0, 20) + "..."}</StyledGenre>
        </StyledInfo>
        <StyledRatingsWrapper>
          <StyledRatingWrapper>
            <StyledRating style={{ background: mapRatingToColorCircle(Math.floor(Number(ratingKinoarea))) }}>
              {Number(ratingKinoarea).toFixed(1)}0
            </StyledRating>
            <StyledRatingTitle>Kinoarea</StyledRatingTitle>
          </StyledRatingWrapper>
          <StyledRatingWrapper>
            <StyledRating style={{ background: mapRatingToColorCircle(Math.floor(Number(vote_average))) }}>
              {Number(vote_average).toFixed(1)}0
            </StyledRating>
            <StyledRatingTitle>IMDb</StyledRatingTitle>
          </StyledRatingWrapper>
        </StyledRatingsWrapper>
      </StyledWrapper>
      <StyledButton onClick={handleNavigateToMovie}>Картка фільма</StyledButton>
    </StyledMovieListCard>
  );
};
