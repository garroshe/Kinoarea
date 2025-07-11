import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import * as useInitNowPlayingMoviesModule from "@/widgets/nowPlaying/model/hooks/useInitNowPlayingMovies";

import { NowPlaying } from "./NowPlaying";

vi.mock("../hooks/useInitNowPlayingMovies", () => ({
  useInitNowPlayingMovies: vi.fn(),
}));

const mockUseInitNowPlayingMovies = useInitNowPlayingMoviesModule.useInitNowPlayingMovies as jest.Mock;

describe("Now playing", () => {
  it("shows loading spinner", () => {
    mockUseInitNowPlayingMovies.mockReturnValue({
      loading: true,
      movies: [],
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
      loading: false,
      movies: [],
    });

    render(
      <MemoryRouter>
        <NowPlaying />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("now-playing-not-found")).toBeInTheDocument();
  });

  it("render movies", () => {
    mockUseInitNowPlayingMovies.mockReturnValue({
      loading: false,
      movies: [
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
