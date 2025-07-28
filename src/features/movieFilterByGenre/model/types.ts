export interface IMovieListProps {
  genreSelect: number | null;
  handleChangeMovies: (genreId: number) => void;
}
