import { render, screen } from "@testing-library/react";
import * as redux from "react-redux";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { store } from "@/app/store";

import { ModalContextProvider } from "../../../Modal/context/modalContext";
import { Header } from "./Header";

vi.mock("react-redux", async () => {
  const actual = await vi.importActual<typeof redux>("react-redux");
  return {
    ...actual,
    useSelector: vi.fn(),
  };
});

vi.mock("@/shared/config/firebase", () => ({
  database: {},
  ref: vi.fn(),
  onValue: vi.fn(),
  set: vi.fn(),
  get: vi.fn(),
  push: vi.fn(),
  FirebaseError: vi.fn(),
  auth: {},
}));

const mockedUseSelector = redux.useSelector as unknown as jest.Mock;

describe("Header", () => {
  beforeEach(() => {
    mockedUseSelector.mockReset();
  });

  it("render header users, when user !== null", () => {
    mockedUseSelector.mockImplementation((selector) =>
      selector({
        auth: {
          user: {
            username: "test",
            avatar: "https://example.com/avatar.png",
          },
        },
      }),
    );

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ModalContextProvider>
            <Header />
          </ModalContextProvider>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId("headerUser")).toBeInTheDocument();
  });
});
