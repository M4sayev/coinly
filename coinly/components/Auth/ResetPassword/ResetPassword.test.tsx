import { fireEvent, render, screen } from "@testing-library/react";
import ResetPassword from "./ResetPassword";

describe("ResetPassword", () => {
  const onCloseMock = vi.fn();
  const setAuthViewMock = vi.fn();
  it("renders all child components", () => {
    render(
      <ResetPassword onClose={onCloseMock} setAuthView={setAuthViewMock} />
    );

    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Reset Password" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /back to log in/i })
    ).toBeInTheDocument();
  });
  test("Back to Log In button calls setAuthView from parent", () => {
    render(
      <ResetPassword onClose={onCloseMock} setAuthView={setAuthViewMock} />
    );
    fireEvent.click(screen.getByRole("button", { name: /back to log in/i }));
    expect(setAuthViewMock).toHaveBeenCalledWith("login");
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
});
