import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { GENRES_TABS } from "../model/constants";
import { GenreTabs } from "./GenreTabs";

describe("GenreTabs", () => {
  const mockFn = vi.fn();
  it("render genres tabs and all genres", () => {
    render(<GenreTabs onChangeMovies={mockFn} />);

    expect(screen.getByTestId("genres-tabs")).toBeInTheDocument();

    GENRES_TABS.forEach((genre) => {
      expect(screen.getByText(genre.label)).toBeInTheDocument();
    });
  });

  it("on click call onChangeMovies with correct genres", async () => {
    render(<GenreTabs onChangeMovies={mockFn} />);

    const secondTab = screen.getByText(GENRES_TABS[1].label);
    await userEvent.click(secondTab);

    expect(mockFn).toHaveBeenCalledWith(GENRES_TABS[1].id);
  });

  it("change active tab on click", async () => {
    render(<GenreTabs onChangeMovies={mockFn} />);

    const allTabs = screen.getAllByRole("listitem");

    await userEvent.click(allTabs[1]);

    expect(allTabs[1].className).toMatch("active");
  });
});
