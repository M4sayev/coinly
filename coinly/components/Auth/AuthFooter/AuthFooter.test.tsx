import { fireEvent, render, screen } from "@testing-library/react";
import AuthFooter from "./AuthFooter";

vi.mock("../OAuthButtons/OAuthButtons", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => <div data-testid="oauth-btns" {...props}></div>,
}));

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
    expect(screen.getByTestId("oauth-btns")).toBeInTheDocument();
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
