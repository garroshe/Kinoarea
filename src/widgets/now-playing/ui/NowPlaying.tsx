import { GenreTabs } from "../../../features/movie-filter/ui/GenreTabs";
import { MovieCard } from "../../../features/movieCard/ui/MovieCard";
import { NavigateButtonUI } from "../../../shared/ui/NavigateButtonUI/ui/NavigateButtonUI";
import { SpinnerUI } from "../../../shared/ui/SpinnerUI/SpinnerUI";
import { TitleUI } from "../../../shared/ui/TitleUI/TitleUI";
import { getPathToImg } from "../../../shared/utils/get-path-to-img";
import { useInitNowPlayingMovies } from "../hooks/useInitNowPlayingMovies";
import { StyledCards, StyledCentered, StyledDivider, StyledNowPlaying, StyledNowPlayingWrapper } from "./styled";

export const NowPlaying = () => {
  const { movies, loading, handleGenreChange } = useInitNowPlayingMovies();

  return (
    <StyledNowPlaying>
      <div className="container">
        <div className="bg-main" />
        <StyledNowPlayingWrapper>
          <TitleUI fontWeight={900} fontSize={65} title="Зараз у кіно" />
          <StyledDivider />
          <GenreTabs onChangeMovies={handleGenreChange} />
        </StyledNowPlayingWrapper>

        {!loading && movies.length === 0 && (
          <StyledCentered data-testid="now-playing-not-found">Фільми не знайдено.</StyledCentered>
        )}

        {loading ? (
          <StyledCentered data-testid="now-playing-spinner">
            <SpinnerUI size="large" />
          </StyledCentered>
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

        <NavigateButtonUI to="/posters" title="Всі новинки" />
      </div>
    </StyledNowPlaying>
  );
};
