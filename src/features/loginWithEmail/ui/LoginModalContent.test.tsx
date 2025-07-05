import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as useAuthModule from "../../../shared/hooks/useAuth";
import { mapModalName } from "../../../shared/utils/map-modal-name";
import * as useModalModule from "../../../widgets/Modal/context/modalContext";
import { INPUTS_PLACEHOLDER, MESSAGE_MODAL } from "../model/constants";
import { LoginModalContent } from "./LoginModalContent";

const mockUseAuth = useAuthModule.useAuth as jest.Mock;
const mockUseModal = useModalModule.useModal as jest.Mock;

jest.mock("../../../shared/hooks/useAuth");
jest.mock("../../../widgets/Modal/context/modalContext");

jest.mock("../../../shared/config/firebase", () => ({
  database: {},
  ref: jest.fn(),
  onValue: jest.fn(),
  set: jest.fn(),
  get: jest.fn(),
  push: jest.fn(),
  FirebaseError: jest.fn(),
  auth: {},
}));

const mockSignInWithEmail = jest.fn();
const mockSignInWithGoogle = jest.fn();
const mockOpenModal = jest.fn();

describe("LoginModalContent", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockUseAuth.mockReturnValue({
      signInWithEmail: mockSignInWithEmail,
      signInWithGoogle: mockSignInWithGoogle,
      loading: false,
      error: "",
    });

    mockUseModal.mockReturnValue({
      openModal: mockOpenModal,
    });
  });

  it("renders input fields and submit button", () => {
    render(<LoginModalContent />);

    expect(screen.getByPlaceholderText(INPUTS_PLACEHOLDER.email)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(INPUTS_PLACEHOLDER.password)).toBeInTheDocument();
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

    await userEvent.type(screen.getByPlaceholderText(INPUTS_PLACEHOLDER.email), "t@g.c");
    await userEvent.type(screen.getByPlaceholderText(INPUTS_PLACEHOLDER.password), "123456");
    await userEvent.click(screen.getByRole("button", { name: /увійти/i }));

    expect(mockSignInWithEmail).toHaveBeenCalledWith("t@g.c", "123456");
  });

  it("calls openModal when register button is clicked", async () => {
    render(<LoginModalContent />);

    await userEvent.click(screen.getByRole("button", { name: /зареєструватись/i }));
    expect(mockOpenModal).toHaveBeenCalledWith("register");
  });

  it("calls openModal when reset password button is clicked", async () => {
    render(<LoginModalContent />);

    await userEvent.click(screen.getByText("Відновити пароль"));
    expect(mockOpenModal).toHaveBeenCalledWith("resetPassword");
  });

  it("calls function signInWithGoogle when click google icon", async () => {
    render(<LoginModalContent />);

    await userEvent.click(screen.getByTestId("google-test-id"));
    expect(mockSignInWithGoogle).toHaveBeenCalled();
  });

  it("calls openModal with message when get error", async () => {
    mockUseAuth.mockReturnValueOnce({
      signInWithEmail: mockSignInWithEmail,
      signInWithGoogle: mockSignInWithGoogle,
      loading: false,
      error: "test",
    });

    render(<LoginModalContent />);

    expect(mockOpenModal).toHaveBeenCalledWith(mapModalName.message, "test", MESSAGE_MODAL.title);
  });

  it("render spinner and button set disabled", async () => {
    mockUseAuth.mockReturnValueOnce({
      signInWithEmail: mockSignInWithEmail,
      signInWithGoogle: mockSignInWithGoogle,
      loading: true,
      error: "",
    });

    render(<LoginModalContent />);

    await userEvent.click(screen.getByRole("button", { name: /увійти/i }));
    expect(mockSignInWithEmail).not.toHaveBeenCalled();
  });
});
