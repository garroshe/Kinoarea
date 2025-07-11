import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { GENRES_TABS } from "@/features/movieFilterByGenre/model/constants";

import { MovieFilterByGenre } from "./MovieFilterByGenre";

describe("Movies Tabs Filters", () => {
  const mockFn = vi.fn();
  it("render genres tabs and all genres", () => {
    render(<MovieFilterByGenre onChangeMovies={mockFn} />);

    expect(screen.getByTestId("genres-tabs")).toBeInTheDocument();

    GENRES_TABS.forEach((genre) => {
      expect(screen.getByText(genre.label)).toBeInTheDocument();
    });
  });

  it("on click call onChangeMovies with correct genres", async () => {
    render(<MovieFilterByGenre onChangeMovies={mockFn} />);

    const secondTab = screen.getByText(GENRES_TABS[1].label);
    await userEvent.click(secondTab);

    expect(mockFn).toHaveBeenCalledWith(GENRES_TABS[1].id);
  });

  it("change active tab on click", async () => {
    render(<MovieFilterByGenre onChangeMovies={mockFn} />);

    const allTabs = screen.getAllByRole("listitem");

    await userEvent.click(allTabs[1]);

    expect(allTabs[1].className).toMatch("active");
  });
});
