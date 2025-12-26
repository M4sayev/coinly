import { render, screen } from "@testing-library/react";
import DownloadButton from "../DownloadButton";

describe("DownloadButton", () => {
  beforeEach(() => {
    render(
      <DownloadButton
        actionText="Download PDF"
        variant="secondary"
        filename="bebra"
      />
    );
  });
  it("renders correct aria-label, href, download attributes", () => {
    const anchor = screen.getByTestId("download-button");

    expect(anchor).toHaveAttribute("href", "./bebra.pdf");
    expect(anchor).toHaveAttribute("download", "bebra.pdf");
    expect(anchor).toHaveAttribute("aria-label", "Download our bebra");
  });
  it("renders action button with the proper action text and type", () => {
    const button = screen.getByTestId("action-button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("data-variant", "secondary");
    expect(button).toHaveTextContent("Download PDF");
  });
});
