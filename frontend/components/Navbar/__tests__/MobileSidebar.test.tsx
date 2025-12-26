import { fireEvent, render, screen } from "@testing-library/react";
import { createTestStore } from "../../../test/testStore";
import MobileSidebar from "../MobileSidebar";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import {
  closeSidebar,
  openSidebar,
  openSignUp,
} from "../../../state/ui/uiSlice";

describe("MobileSiderbar", () => {
  let store: ReturnType<typeof createTestStore>;

  const renderMobileSidebar = (
    isSidebarOpen = false,
    preloadedState = {
      ui: { isSignUpModalOpen: false, isSidebarOpen, currency: "EUR" },
    }
  ) => {
    store = createTestStore(preloadedState);
    const onSignUpClick = () => store.dispatch(openSignUp());

    const onCloseMobileNav = () => store.dispatch(closeSidebar());
    const onHamburgerClick = () => {
      const current = store.getState().ui.isSidebarOpen;
      if (current) onCloseMobileNav();
      else store.dispatch(openSidebar());
    };

    return render(
      <Provider store={store}>
        <MobileSidebar
          onCloseMobileNav={onCloseMobileNav}
          onHamburgerClick={onHamburgerClick}
          onSignUpClick={onSignUpClick}
          isSidebarOpen={isSidebarOpen}
        />
      </Provider>
    );
  };
  it("hides the sidebar on the isSidebarOpen false", () => {
    renderMobileSidebar();
    const mobileSidebar = screen.getByTestId("mobile-sidebar");
    expect(mobileSidebar).not.toHaveAttribute("aria-modal");
    expect(mobileSidebar).not.toHaveAttribute("role");

    const aside = mobileSidebar.querySelector("aside");
    expect(aside).toBeInTheDocument();

    expect(aside).toHaveClass("top-[-105%]");

    expect(aside).toHaveAttribute("aria-hidden", "true");
    expect(aside).toHaveAttribute("inert", "");
  });
  it("sets role and aria-modal correctly", () => {
    renderMobileSidebar(true);
    const mobileSidebar = screen.getByTestId("mobile-sidebar");

    const aside = mobileSidebar.querySelector("aside");

    expect(mobileSidebar).toHaveAttribute("aria-modal", "true");
    expect(mobileSidebar).toHaveAttribute("role", "dialog");

    expect(aside).toHaveClass("top-0");
  });
  it("opens signUp on signup button clicked", async () => {
    const user = userEvent.setup();
    renderMobileSidebar(true);
    const button = screen.getByRole("button", { name: /open sign up modal/i });
    expect(store.getState().ui.isSignUpModalOpen).toBe(false);

    await user.click(button);

    expect(store.getState().ui.isSignUpModalOpen).toBe(true);
  });
  it("hamburger menu click toggles isSidebarOpen correctly", async () => {
    const user = userEvent.setup();
    renderMobileSidebar();

    const hamburger = screen.getByRole("button", {
      name: /open mobile sidebar navigation/i,
    });

    expect(store.getState().ui.isSidebarOpen).toBe(false);
    await user.click(hamburger);
    expect(store.getState().ui.isSidebarOpen).toBe(true);

    expect(document.activeElement).toBe(hamburger);

    await user.click(hamburger);
    expect(store.getState().ui.isSidebarOpen).toBe(false);
  });
  it("click outside closes the sidebar", () => {
    renderMobileSidebar(true);

    expect(store.getState().ui.isSidebarOpen).toBe(true);

    fireEvent.mouseDown(document.body);

    expect(store.getState().ui.isSidebarOpen).toBe(false);
  });
  it("escape key closes the sidebar", () => {
    renderMobileSidebar(true);

    expect(store.getState().ui.isSidebarOpen).toBe(true);
    fireEvent.keyDown(document, { key: "Escape" });

    expect(store.getState().ui.isSidebarOpen).toBe(false);
  });
  it("dropdown updates the redux store correctly", async () => {
    const user = userEvent.setup();
    renderMobileSidebar(true);
    const dropdownButton = screen.getByText("EUR");

    dropdownButton.focus();

    await user.click(dropdownButton);
    await user.keyboard("{arrowdown}");
    await user.keyboard("{Enter}");
    screen.debug();

    expect(store.getState().ui.currency).toBe("AZN");
  });
});
