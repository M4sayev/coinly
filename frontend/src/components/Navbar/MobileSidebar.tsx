import { useRef } from "react";
import CustomNavLink from "../UI/CustomNavLink";
import ActionButton from "../UI/ActionButton";
import { currencies } from "../../constants/currencies";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setCurrency } from "../../state/ui/uiSlice";
import { useTrapFocus } from "../../hooks/useTrapFocus";
import Hamburger from "./Hamburger";
import useClickOutside from "../../hooks/useClickOutside";
import ToggleTheme from "./ToggleTheme";
import SelectDropdown from "../UI/SelectDropdown";

interface SidebarProps {
  isSidebarOpen: boolean;
  onSignUpClick: () => void;
  onHamburgerClick: () => void;
  onCloseMobileNav: () => void;
}

function MobileSidebar({
  isSidebarOpen,
  onSignUpClick,
  onHamburgerClick,
  onCloseMobileNav,
}: SidebarProps) {
  const currency = useAppSelector((state) => state.ui.currency);
  const isSignUpOpen = useAppSelector((state) => state.ui.isSignUpModalOpen);
  const dispatch = useAppDispatch();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useTrapFocus(sidebarRef, isSidebarOpen);

  useClickOutside(sidebarRef, onCloseMobileNav, isSignUpOpen);

  return (
    <div
      ref={sidebarRef}
      aria-label="Mobile navigation menu"
      role="dialog"
      aria-modal="true"
      id="mobile-sidebar"
    >
      <Hamburger
        isSidebarOpen={isSidebarOpen}
        onOpenMobileNav={onHamburgerClick}
      />
      <aside
        className={`z-10 fixed right-0 px-8 pr-[min(33vh,_30rem)] py-15 h-full bg-gray-200/10 backdrop-blur-sm transition-all duration-700 shadow-[var(--shadow-sm)] ${
          isSidebarOpen ? "top-0" : "-top-full"
        }`}
      >
        <nav className="flex flex-col gap-4">
          <CustomNavLink to="/">Home</CustomNavLink>
          <CustomNavLink to="/watchlist">Watchlist</CustomNavLink>
          <div className="mt-3 flex flex-col gap-2">
            <SelectDropdown
              id="currency"
              value={currency}
              options={currencies}
              onChange={(value) => dispatch(setCurrency(value))}
            />
            <div>
              <ActionButton onClick={onSignUpClick} aria-label="Sign up">
                Sign up
              </ActionButton>
            </div>
          </div>
          <ToggleTheme />
        </nav>
      </aside>
    </div>
  );
}

export default MobileSidebar;
