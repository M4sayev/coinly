import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import FormErrorMessage from "../FormErrorMessage";
import { mockError } from "../../../../test/mockData";

describe("FormErrorMessage", () => {
  it("doesnt return anything when error is not present", () => {
    render(<FormErrorMessage id="test-error" error={undefined} />);
    expect(screen.queryByText(/this field is required/i)).toBeNull();
  });
  it("renders error message with id", () => {
    render(<FormErrorMessage id="test-error" error={mockError} />);

    const errorParagraph = screen.getByTestId("form-error-message");
    expect(errorParagraph).toBeInTheDocument();
    expect(errorParagraph).toHaveAttribute("id", "test-error");
  });
});
