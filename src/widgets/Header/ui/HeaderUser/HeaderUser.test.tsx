import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, vi } from "vitest";

import * as useUserModule from "@/app/providers/user/ui/UserContextProvider";

import { HeaderUser } from "./HeaderUser";

vi.mock("@/app/providers/user/ui/UserContextProvider");

const mockUseUserModule = useUserModule.useUser as unknown as jest.Mock;

const mockLogout = vi.fn();

describe("HeaderUser", () => {
  it("show component when user auth", async () => {
    mockUseUserModule.mockReturnValue({
      logout: mockLogout,
    });

    render(<HeaderUser userName="test" avatar="test" loginName="test" lastName="test" />);

    expect(screen.queryByTestId("dropdown-test-id")).not.toBeInTheDocument();

    await userEvent.click(screen.getByTestId("headerUser"));

    expect(screen.queryByTestId("dropdown-test-id")).toBeInTheDocument();

    await userEvent.click(screen.getByTestId("exit-test-id"));
    expect(mockLogout).toHaveBeenCalled();
  });
});
