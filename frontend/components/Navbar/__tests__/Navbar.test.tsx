it("", () => {});
/*
import { render, screen } from "@testing-library/react";
import { createTestStore } from "../../../test/testStore";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { act } from "react";

import Navbar from "../Navbar";


vi.mock("@/assets/logo.svg", () => ({
  __esModule: true,
  default: (props: any) => <div data-testid="logo-icon" {...props} />,
}));

vi.mock("../Auth/AuthDialog/AuthDialog", () => ({
  __esModule: true,
  default: (props: any) => <div data-testid="auth-dialog" {...props} />,
}));

describe("Navbar", () => {
  let store: ReturnType<typeof createTestStore>;
  const renderNavbar = (
    preloadedState = {
      ui: { isSidebarOpen: false, isSignUpModalOpen: false, currency: "btc" },
    }
  ) => {
    store = createTestStore(preloadedState);
    return render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
  };
  it("opens authDialog on sign up clicked", async () => {
    const user = userEvent.setup();
    renderNavbar();

    const signUpButton = screen.getByRole("button", {
      name: /Open authentication dialog for sign up or Log in/i,
    });

    expect(signUpButton).toBeInTheDocument();
    await user.click(signUpButton);

    expect(store.getState().ui.isSignUpModalOpen).toBe(true);
  });
  it("updates the redux currency state on dropdown value change", async () => {
    const user = userEvent.setup();
    renderNavbar();
    const dropdown = screen.getAllByText(/btc/i);
    const dropdownButton = dropdown[0];

    dropdownButton.focus();

    await user.click(dropdownButton);
    await user.keyboard("{arrowdown}");
    await user.keyboard("{Enter}");
    screen.debug();

    expect(store.getState().ui.currency).toBe("BTC");
  });

  it("closes the mobile sidebar on resize from smaller screens to larger ones", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 400,
    });
    window.dispatchEvent(new Event("resize"));

    renderNavbar({
      ui: { isSidebarOpen: true, isSignUpModalOpen: false, currency: "btc" },
    });

    act(() => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 1024,
      });
      window.dispatchEvent(new Event("resize"));
    });

    expect(store.getState().ui.isSidebarOpen).toBe(false);
  });
  it("toggles mobile sidebar on hamburger click", async () => {
    const user = userEvent.setup();
    renderNavbar({
      ui: { isSidebarOpen: false, isSignUpModalOpen: false, currency: "BTC" },
    });

    const hamburger = screen.getByRole("button", {
      name: /open mobile sidebar navigation/i,
    });

    expect(store.getState().ui.isSidebarOpen).toBe(false);
    await user.click(hamburger);
    expect(store.getState().ui.isSidebarOpen).toBe(true);

    await user.click(hamburger);
    expect(store.getState().ui.isSidebarOpen).toBe(false);
  });
});

*/
