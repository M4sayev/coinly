import "@testing-library/react";
import { describe, it, expect } from "vitest";
import ToggleTheme from "../ToggleTheme";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { CreateTestStore } from "../../../test/testStore";

let store: ReturnType<typeof CreateTestStore>;
beforeEach(() => {
  store = CreateTestStore({ ui: { theme: "light" } });
  render(
    <Provider store={store}>
      <ToggleTheme />
    </Provider>
  );
});

describe("ToggleTheme", () => {
  it("dispatches setTheme on click", () => {
    const button = screen.getByRole("button");
    button.click();

    expect(store.getState().ui.theme).toBe("dark");
  });
  it("toggles the html data theme on click", () => {
    const html = document.documentElement;
    expect(html).toHaveAttribute("data-theme", "light");

    const button = screen.getByRole("button");
    button.click();

    expect(html).toHaveAttribute("data-theme", "dark");
  });

  it("renders an initial button", () => {
    const button = screen.getByRole("button", {
      name: /Switch the page theme to dark/i,
    });
    expect(button).toBeInTheDocument();
  });
});
