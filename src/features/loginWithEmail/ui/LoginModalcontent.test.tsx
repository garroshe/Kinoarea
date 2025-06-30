import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LoginModalContent } from "./LoginModalContent";

const mockSignInWithEmail = jest.fn();
const mockOpenModal = jest.fn();

jest.mock("../../../shared/hooks/useAuth", () => ({
  useAuth: () => ({
    signInWithEmail: mockSignInWithEmail,
    signInWithGoogle: jest.fn(),
    signInWithFacebook: jest.fn(),
    signInWithTwitter: jest.fn(),
    signInWithGitHub: jest.fn(),
    loading: false,
    error: "",
  }),
}));

jest.mock("../../../widgets/Modal/context/modalContext", () => ({
  useModal: () => ({
    openModal: mockOpenModal,
    closeModal: jest.fn(),
  }),
}));

describe("LoginModalContent", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // очищає всі моки перед кожним тестом
  });

  it("renders input fields and submit button", () => {
    render(<LoginModalContent />);

    expect(screen.getByPlaceholderText("Ваша пошта")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Ваш пароль")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /увійти/i })).toBeInTheDocument();
  });

  it("shows validation errors on empty submit", async () => {
    render(<LoginModalContent />);
    const submitButton = screen.getByRole("button", { name: /увійти/i });

    await userEvent.click(submitButton);

    expect(await screen.findAllByText("Обов'язково")).toHaveLength(2);
  });

  it("calls signInWithEmail on valid form submit", async () => {
    render(<LoginModalContent />);

    await userEvent.type(screen.getByPlaceholderText("Ваша пошта"), "t@g.c");
    await userEvent.type(screen.getByPlaceholderText("Ваш пароль"), "123456");
    await userEvent.click(screen.getByRole("button", { name: /увійти/i }));

    expect(mockSignInWithEmail).toHaveBeenCalledWith("t@g.c", "123456");
  });

  it("calls openModal when register button is clicked", async () => {
    render(<LoginModalContent />);
    await userEvent.click(screen.getByRole("button", { name: /зареєструватись/i }));
    expect(mockOpenModal).toHaveBeenCalledWith("register");
  });
});
