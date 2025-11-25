import { render, screen } from "@testing-library/react";
import CoinSearchBar from "./CoinSearchBar";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

function Wrapper() {
  const [value, setValue] = useState("");

  return (
    <CoinSearchBar
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onReset={() => setValue("")}
    />
  );
}

describe("CoinSearchBar", () => {
  it("calls onChange when user types", async () => {});
  it("renders value of input properly", async () => {
    const user = userEvent.setup();
    render(<Wrapper />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("value", "");

    await user.click(input);

    await user.type(input, "bebra");
    expect(input).toHaveAttribute("value", "bebra");
  });
  it("correctly toggles visibility of clear search button and sets tabindex", async () => {
    const user = userEvent.setup();
    render(<Wrapper />);

    const clearBtn = screen.getByRole("button", {
      name: /Clear the searched cryptocurrency name/i,
    });

    expect(clearBtn).toHaveClass("opacity-0 pointer-events-none");
    expect(clearBtn).toHaveAttribute("tabindex", "-1");

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("value", "");
    await user.type(input, "bebra");

    expect(clearBtn).toHaveClass("opacity-full pointer-events-auto");
    expect(clearBtn).toHaveAttribute("tabindex", "0");
  });
  it("clear button is tabbable", async () => {
    const user = userEvent.setup();
    render(<Wrapper />);

    const clearBtn = screen.getByRole("button", {
      name: /Clear the searched cryptocurrency name/i,
    });

    const input = screen.getByRole("textbox");
    await user.type(input, "bebra");
    expect(input).toHaveAttribute("value", "bebra");

    await user.click(input);
    await user.tab();

    expect(document.activeElement).toBe(clearBtn);

    await user.keyboard("{Enter}");

    expect(input).toHaveAttribute("value", "");
  });
  it("calls onReset on clear button clicked", async () => {
    const user = userEvent.setup();
    render(<Wrapper />);

    const clearBtn = screen.getByRole("button", {
      name: /Clear the searched cryptocurrency name/i,
    });

    const input = screen.getByRole("textbox");
    await user.type(input, "bebra");
    expect(input).toHaveAttribute("value", "bebra");

    await user.click(clearBtn);

    expect(input).toHaveAttribute("value", "");
  });
});
