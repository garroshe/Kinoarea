import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import * as useInitNowPlayingMoviesModule from "@/widgets/nowPlaying/model/use-movies-now-playing-fetch";

import { NowPlaying } from "./NowPlaying";

vi.mock("@/widgets/nowPlaying/model/use-movies-now-playing-fetch");

const mockUseInitNowPlayingMovies = useInitNowPlayingMoviesModule.useMoviesNowPlayingFetch as unknown as jest.Mock;

describe("Now playing", () => {
  it("shows loading spinner", () => {
    mockUseInitNowPlayingMovies.mockReturnValue({
      isMovieLoading: true,
      movieDataFetch: [],
    });

    render(
      <MemoryRouter>
        <NowPlaying />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("now-playing-spinner")).toBeInTheDocument();
  });
  it("shows not found", () => {
    mockUseInitNowPlayingMovies.mockReturnValue({
      isMovieLoading: false,
      movieDataFetch: [],
    });

    render(
      <MemoryRouter>
        <NowPlaying />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Фільми не знайдено./i)).toBeInTheDocument();
  });
  it("render movies", () => {
    mockUseInitNowPlayingMovies.mockReturnValue({
      isMovieLoading: false,
      movieDataFetch: [
        {
          id: 1,
          title: "Movie 1",
          genre_ids: [28],
          poster_path: "/poster.jpg",
          vote_average: 7.5,
        },
      ],
    });

    render(
      <MemoryRouter>
        <NowPlaying />
      </MemoryRouter>,
    );

    expect(screen.getByText("Movie 1")).toBeInTheDocument();
    expect(screen.getByText(/всі новинки/i)).toBeInTheDocument();
  });
});
