import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AddToFavorites } from "@/features/addToFavorites";
import { Breadcrumbs } from "@/features/breadcrumbs";
import { LikeOrDislike } from "@/features/likeOrDislike";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { routesBook } from "@/shared/routing/routesBook";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { RatingCircleUI } from "@/shared/ui/RatingCircleUI";
import { SocialUI } from "@/shared/ui/SocialUI";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";
import { TitleUI } from "@/shared/ui/TitleUI";
import { getPathToImg } from "@/shared/utils/get-path-to-img";
import { mapGenreCodeToGenre } from "@/shared/utils/map-genre-code-to-genre";
import { formatRuntime } from "@/widgets/movieDescription/lib/formatRuntime";
import { safeValue } from "@/widgets/movieDescription/lib/safeValue";

import { useMovieFetchByIdQuery } from "../api/hooks/use-movie-fetch-by-id-query";
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
  StyledProgress,
  StyledRatingWrapper,
  StyledSavedMovie,
  StyledSubTitle,
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

  console.log(movieDataFetch);

  const navigate = useNavigate();

  const isDesktop = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 480px)");

  const ratingKinoarea = vote_average ? vote_average + 0.8 : undefined;

  const progressWidth = vote_count ? Math.min((vote_count / 2500) * 100, 100) : 0;
  const countries = production_countries?.[0].iso_3166_1;
  const genreString = genre_ids?.map(mapGenreCodeToGenre).join(", ");

  const handleClickToWatchMovie = () => {
    // window.open(
    //   "https://www.google.com/search?q=%D0%B2%D0%B5%D0%BD%D1%81%D0%B4%D0%B5%D0%B9%20%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D1%8E%20uakino.club",
    //   "_blank",
    // );
    if (!title) return;
    const query = encodeURIComponent(`${title} українською site:uakino.club`);
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
          <TitleUI title={title} fontSize={32} marginBottom={4} marginTop={4} />
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
            <TitleUI title={title} fontSize={isDesktop ? 60 : 40} marginBottom={4} marginTop={4} />
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
