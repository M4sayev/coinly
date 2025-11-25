import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "../LoginForm";
import userEvent from "@testing-library/user-event";

describe("LoginForm", () => {
  const setAuthViewMock = vi.fn();

  beforeEach(() => {
    setAuthViewMock.mockClear();
  });
  it("renders all child components", () => {
    render(<LoginForm setAuthView={setAuthViewMock} />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByTestId("password-label")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
  });
  test("submits form with valid data", async () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    render(<LoginForm setAuthView={setAuthViewMock} />);

    const emailInput = screen.getByPlaceholderText("yourname@example.com");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const submitButton = screen.getByRole("button", { name: /log in/i });

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");

    await userEvent.click(submitButton);

    expect(consoleSpy).toHaveBeenCalledWith({
      "login-email-field": "test@example.com",
      "login-password-field": "password123",
    });
  });
  test("calls setAuthView when forgot password is clicked", () => {
    render(<LoginForm setAuthView={setAuthViewMock} />);
    const forgotButton = screen.getByText(/forgot password/i);
    fireEvent.click(forgotButton);
    expect(setAuthViewMock).toHaveBeenCalledWith("reset-password");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
});
