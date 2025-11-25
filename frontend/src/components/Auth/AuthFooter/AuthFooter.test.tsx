import { fireEvent, render, screen } from "@testing-library/react";
import AuthFooter from "./AuthFooter";

describe("AuthFooter", () => {
  const setAuth = vi.fn();
  beforeEach(() => {
    setAuth.mockClear();
    render(
      <AuthFooter
        setAuth={setAuth}
        promptText="Test prompt text"
        authSlide={"log in"}
      />
    );
  });
  it("renders child all components correctly", () => {
    expect(
      screen.getByRole("heading", { name: /Social sign-in options/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Test prompt text/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /log in/i }));
  });
  it("sets aria-label correctly", () => {
    const button = screen.getByRole("button", { name: /log in/i });
    expect(button).toHaveAttribute("aria-label", "Go to log in form");
  });
  it("calls setAuth on click", () => {
    const button = screen.getByRole("button", { name: /log in/i });
    fireEvent.click(button);

    expect(setAuth).toBeCalledTimes(1);
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
});
