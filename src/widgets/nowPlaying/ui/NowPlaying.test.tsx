import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { useMoviesNowPlayingFetch } from "@/widgets/nowPlaying/model/use-movies-now-playing-fetch";

import { NowPlaying } from "./NowPlaying";

vi.mock("@/widgets/nowPlaying/model/use-movies-now-playing-fetch", () => ({
  useMoviesNowPlayingFetch: vi.fn(),
}));

const mockedUseMoviesNowPlayingFetch = vi.mocked(useMoviesNowPlayingFetch);

describe("Now playing", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows loading spinner", () => {
    mockedUseMoviesNowPlayingFetch.mockReturnValue({
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
    mockedUseMoviesNowPlayingFetch.mockReturnValue({
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
    mockedUseMoviesNowPlayingFetch.mockReturnValue({
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
