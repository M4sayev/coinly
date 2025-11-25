import { fireEvent, render, screen } from "@testing-library/react";
import ForgotPassword from "../ForgotPassword";

describe("ForgotPassword", () => {
  const onCloseMock = vi.fn();
  const setAuthViewMock = vi.fn();
  it("renders all child components", () => {
    render(
      <ForgotPassword onClose={onCloseMock} setAuthView={setAuthViewMock} />
    );

    expect(
      screen.getByRole("heading", { name: /reset password/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /reset password/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /back to log in/i })
    ).toBeInTheDocument();
  });
  test("Back to Log In button calls setAuthView from parent", () => {
    render(
      <ForgotPassword onClose={onCloseMock} setAuthView={setAuthViewMock} />
    );
    fireEvent.click(screen.getByRole("button", { name: /back to log in/i }));
    expect(setAuthViewMock).toHaveBeenCalledWith("login");
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
});
