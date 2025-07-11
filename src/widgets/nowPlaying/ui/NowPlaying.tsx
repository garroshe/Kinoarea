import { MovieCard } from "@/features/movieCard/ui/MovieCard";
import { MovieFilterByGenre } from "@/features/movieFilterByGenre/ui/MovieFilterByGenre";
import { colors } from "@/shared/constants/style";
import { routesBook } from "@/shared/routing/routesBook";
import { CenteredContentUI } from "@/shared/ui/CenteredContentUI/CenteredContentUI";
import { NavigateButtonUI } from "@/shared/ui/NavigateButtonUI/ui/NavigateButtonUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI/SpinnerUI";
import { TitleUI } from "@/shared/ui/TitleUI/TitleUI";
import { getPathToImg } from "@/shared/utils/get-path-to-img";
import { useInitNowPlayingMovies } from "@/widgets/nowPlaying/model/hooks/useInitNowPlayingMovies";

import { StyledCards, StyledDivider, StyledNowPlaying, StyledNowPlayingWrapper } from "./styled";

export const NowPlaying = () => {
  const { movies, loading, handleGenreChange } = useInitNowPlayingMovies();

  return (
    <StyledNowPlaying>
      <div className="container">
        <div className="bg-main" />
        <StyledNowPlayingWrapper>
          <TitleUI fontWeight={900} fontSize={65} title="Зараз у кіно" />
          <StyledDivider />
          <MovieFilterByGenre onChangeMovies={handleGenreChange} />
        </StyledNowPlayingWrapper>

        {!loading && movies.length === 0 && (
          <CenteredContentUI testId="now-playing-not-found">
            <p style={{ color: colors.white50 }}>Фільми не знайдено.</p>
          </CenteredContentUI>
        )}

        {loading ? (
          <CenteredContentUI testId="now-playing-spinner">
            <SpinnerUI size="large" />
          </CenteredContentUI>
        ) : (
          <StyledCards>
            {movies.map((item) => {
              return (
                <MovieCard
                  title={item.title}
                  genre={item.genre_ids}
                  img={getPathToImg(item.poster_path, 500)}
                  rating={Number(item.vote_average.toFixed(1))}
                  key={item.id}
                  originalTitle={item.original_title}
                />
              );
            })}
          </StyledCards>
        )}

        <NavigateButtonUI to={routesBook.posters()} title="Всі новинки" />
      </div>
    </StyledNowPlaying>
  );
};
