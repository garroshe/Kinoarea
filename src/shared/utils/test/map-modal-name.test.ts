import { mapModalName } from "../map-modal-name";

describe("mapModalName", () => {
  it("Return 'login' for login", () => {
    expect(mapModalName.login).toBe("login");
  });

  it("Return 'register' for register", () => {
    expect(mapModalName.register).toBe("register");
  });

  it("Return 'message' for message", () => {
    expect(mapModalName.message).toBe("message");
  });

  it("Return 'ResetPassword' for ResetPassword", () => {
    expect(mapModalName.resetPassword).toBe("resetPassword");
  });
});
