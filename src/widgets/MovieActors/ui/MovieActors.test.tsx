import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { ActorCard } from "@/entities/actors/ui/ActorCard/ActorCard";

const mockedNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  };
});

describe("MovieActors", () => {
  it("redirect to actor page", async () => {
    render(<ActorCard name="test" character="test" imgUrl="/test/test1414" id={23} />);

    await userEvent.click(screen.getByTestId("actor-card"));

    expect(mockedNavigate).toHaveBeenCalled();
  });
});
