import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import { ModalContextProvider } from "@/app/providers/modal/ModalProvider";
import * as useAuthModule from "@/shared/hooks/use-auth";

import { ResetPassword } from "./ResetPassword";

vi.mock("@/shared/hooks/use-auth");

const mockUseAuth = useAuthModule.useAuth as unknown as jest.Mock;

const mockResetPassword = vi.fn();

describe("Reset Password", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mockUseAuth.mockReturnValue({
      resetPassword: mockResetPassword,
    });
  });

  it("render", () => {
    render(
      <ModalContextProvider>
        <ResetPassword />
      </ModalContextProvider>,
    );

    expect(screen.getByTestId("reset-password-form")).toBeInTheDocument();
  });

  it("send with empty field", async () => {
    render(
      <ModalContextProvider>
        <ResetPassword />
      </ModalContextProvider>,
    );

    await userEvent.click(screen.getByRole("button", { name: /Надіслати лист/i }));

    expect(screen.getByText("Обов'язкове поле")).toBeInTheDocument();
  });

  it("send with correct field", async () => {
    render(
      <ModalContextProvider>
        <ResetPassword />
      </ModalContextProvider>,
    );

    await userEvent.type(screen.getByTestId("reset-password-input"), "t@g.c");
    await userEvent.click(screen.getByRole("button", { name: /Надіслати лист/i }));

    expect(mockResetPassword).toHaveBeenCalledWith("t@g.c");
  });
});
