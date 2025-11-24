import { render, screen } from "@testing-library/react";
import MobileSidebar from "../../components/Navbar/MobileSidebar";
import { createTestStore } from "../../test/testStore";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("useFocusTrap", () => {
  it("traps the focus inside the MobileSidebar", async () => {
    const user = userEvent.setup();

    const onSignUpClick = vi.fn();
    const onHamburgerClick = vi.fn();
    const onCloseMobileNav = vi.fn();

    const store = createTestStore({
      ui: {
        isSidebarOpen: true,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <MobileSidebar
            isSidebarOpen={true}
            onSignUpClick={onSignUpClick}
            onHamburgerClick={onHamburgerClick}
            onCloseMobileNav={onCloseMobileNav}
          />
        </MemoryRouter>
      </Provider>
    );

    const sidebar = screen.getByTestId("mobile-sidebar");
    const hamburger = screen.getByRole("button", {
      name: "Open mobile sidebar navigation",
    });
    hamburger.focus();
    expect(sidebar).toBeInTheDocument();

    for (let i = 0; i < 5; i++) {
      await user.tab();
      const activeEl = document.activeElement as HTMLElement;
      expect(activeEl).not.toBeNull();
      expect(sidebar).toContainElement(activeEl!);
    }

    for (let i = 0; i < 5; i++) {
      await user.tab({ shift: true });
      const activeEl = document.activeElement as HTMLElement;
      expect(activeEl).not.toBeNull();
      expect(sidebar).toContainElement(activeEl!);
    }
  });
});
