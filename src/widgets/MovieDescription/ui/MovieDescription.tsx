import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AddToFavorites } from "@/features/AddToFavorites";
import { Breadcrumbs } from "@/features/Breadcrumbs";
import { LikeOrDislike } from "@/features/LikeOrDislike";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { routesBook } from "@/shared/routing/routesBook";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { RatingCircleUI } from "@/shared/ui/RatingCircleUI";
import { SocialUI } from "@/shared/ui/SocialUI";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";
import { getPathToImg } from "@/shared/utils/get-path-to-img";
import { mapGenreCodeToGenre } from "@/shared/utils/map-genre-code-to-genre";
import { safeValue } from "@/shared/utils/safe-value";

import { useMovieFetchByIdQuery } from "../api/use-movie-fetch-by-id-query";
import { formatRuntime } from "../lib/format-runtime";
import {
  StyledActionBlock,
  StyledActionWrapper,
  StyledButtonAndSocialWrapper,
  StyledDescription,
  StyledImg,
  StyledImgAndRatingWrapper,
  StyledInfoTable,
  StyledListKeys,
  StyledListValue,
  StyledMainInfo,
  StyledMobileTitle,
  StyledProgress,
  StyledRatingWrapper,
  StyledSavedMovie,
  StyledSubTitle,
  StyledTitle,
  StyledTitleAndFavoriteWrapper,
  StyledWatchMovieButton,
  StyledWatchTrailerButton,
} from "./styled";

export const MovieDescription = () => {
  const { movieDataFetch, movieLoading } = useMovieFetchByIdQuery();

  const {
    vote_average,
    poster_path,
    original_title,
    title,
    overview,
    vote_count,
    release_date,
    production_countries,
    tagline,
    genre_ids,
    budget,
    adult,
    revenue,
    runtime,
  } = movieDataFetch || {};

  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width: 480px)");

  const ratingKinoarea = vote_average ? vote_average + 0.8 : undefined;

  const progressWidth = vote_count ? Math.min((vote_count / 2500) * 100, 100) : 0;
  const countries = production_countries?.[0].iso_3166_1;
  const genreString = genre_ids?.map(mapGenreCodeToGenre).join(", ");

  const handleClickToWatchMovie = async () => {
    if (!title) return;
    const query = encodeURIComponent(`${title} українською site:uakino.best`);
    const url = `https://www.google.com/search?q=${query}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    if (!movieLoading && !movieDataFetch) {
      navigate("/error_movie_not_found");
    }
  }, [movieDataFetch, movieLoading]);

  return (
    <ContainerUI>
      {isMobile ? (
        <StyledMainInfo data-testid="movie-info">
          <Breadcrumbs
            path={[
              { to: routesBook.films(), label: "Фільми", isLast: false },
              { to: "", label: title || "", isLast: true },
            ]}
          />
          <StyledMobileTitle>{title}</StyledMobileTitle>
          <StyledSubTitle>{original_title}</StyledSubTitle>
          <StyledImgAndRatingWrapper>
            <StyledImg src={getPathToImg(poster_path, 500)} alt={original_title} />
            <StyledRatingWrapper>
              <RatingCircleUI value={ratingKinoarea} label="Kinoarea" />
              <RatingCircleUI value={vote_average} label="IMDb" />
              <Link to={routesBook.favorites()}>Перейти у вибране</Link>
            </StyledRatingWrapper>
          </StyledImgAndRatingWrapper>
          <StyledDescription>{overview}</StyledDescription>
          <StyledButtonAndSocialWrapper>
            <StyledWatchTrailerButton href="#movie-trailer">
              <SvgIcon icon={icons.play} />
              Дивитися трейлер
            </StyledWatchTrailerButton>
            <StyledWatchMovieButton onClick={handleClickToWatchMovie}>
              <SvgIcon icon={icons.play} />
              Дивитися фільм
            </StyledWatchMovieButton>
            <SocialUI />
          </StyledButtonAndSocialWrapper>
        </StyledMainInfo>
      ) : (
        <StyledMainInfo data-testid="movie-info">
          <StyledImg src={getPathToImg(poster_path, 500)} alt={original_title} />
          <div>
            <Breadcrumbs
              path={[
                { to: routesBook.films(), label: "Фільми", isLast: false },
                { to: "", label: title || "", isLast: true },
              ]}
            />
            <StyledTitle>{title}</StyledTitle>
            <StyledTitleAndFavoriteWrapper>
              <StyledSubTitle>{original_title}</StyledSubTitle>
              <Link to={routesBook.favorites()}>Перейти у вибране</Link>
            </StyledTitleAndFavoriteWrapper>
            <StyledRatingWrapper>
              <RatingCircleUI value={ratingKinoarea} label="Kinoarea" />
              <RatingCircleUI value={vote_average} label="IMDb" />
            </StyledRatingWrapper>
            <StyledDescription>{overview}</StyledDescription>
            <StyledButtonAndSocialWrapper>
              <StyledWatchTrailerButton href="#movie-trailer">
                <SvgIcon icon={icons.play} />
                Дивитися трейлер
              </StyledWatchTrailerButton>
              <StyledWatchMovieButton onClick={handleClickToWatchMovie}>
                <SvgIcon icon={icons.play} />
                Дивитися фільм
              </StyledWatchMovieButton>
              <SocialUI />
            </StyledButtonAndSocialWrapper>
          </div>
        </StyledMainInfo>
      )}
      <div>
        <StyledActionWrapper>
          <StyledActionBlock>
            <LikeOrDislike type="like" />
            <LikeOrDislike type="dislike" />
            <StyledProgress $width={progressWidth}>
              <div />
              <p>Рейтинг очікувань {Math.floor(progressWidth)}%</p>
            </StyledProgress>
          </StyledActionBlock>
          <StyledActionBlock>
            <AddToFavorites />
            <StyledSavedMovie>В обраному {vote_count} людей</StyledSavedMovie>
          </StyledActionBlock>
        </StyledActionWrapper>
      </div>
      <StyledInfoTable>
        <div>
          <StyledListKeys>
            <li>Рік:</li>
            <li>Країна:</li>
            <li>Девіз:</li>
            <li>Касові збори:</li>
          </StyledListKeys>
          <StyledListValue>
            <li>{safeValue(release_date)}</li>
            <li>{safeValue(countries)}</li>
            <li>{safeValue(tagline)}</li>
            <li>{revenue ? `$${revenue.toLocaleString()}` : "Немає даних"}</li>
          </StyledListValue>
        </div>
        <div>
          <StyledListKeys>
            <li>Жанр:</li>
            <li>Бюджет:</li>
            <li>Вікова категорія:</li>
            <li>Тривалість:</li>
          </StyledListKeys>
          <StyledListValue>
            <li>{safeValue(genreString)}</li>
            <li>{budget ? `$${budget.toLocaleString()}` : "Немає даних"}</li>
            <li>{adult ? "18+" : "14+"}</li>
            <li>
              {runtime} хв / {formatRuntime(runtime || 0)}
            </li>
          </StyledListValue>
        </div>
      </StyledInfoTable>
    </ContainerUI>
  );
};
