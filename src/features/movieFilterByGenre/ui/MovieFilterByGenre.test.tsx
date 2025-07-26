import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { GENRES_TABS } from "@/features/movieFilterByGenre/model/constants";

import { MovieFilterByGenre } from "./MovieFilterByGenre";

describe("Movies Tabs Filters", () => {
  it("render genres tabs and all genres", () => {
    render(
      <MemoryRouter>
        <MovieFilterByGenre />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("genres-tabs")).toBeInTheDocument();

    GENRES_TABS.forEach((genre) => {
      expect(screen.getByText(genre.label)).toBeInTheDocument();
    });
  });

  it("change active tab on click", async () => {
    render(
      <MemoryRouter>
        <MovieFilterByGenre />
      </MemoryRouter>,
    );

    const allTabs = screen.getAllByRole("listitem");

    await userEvent.click(allTabs[1]);

    expect(allTabs[1].className).toMatch("active");
  });
});
