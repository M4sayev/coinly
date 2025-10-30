import React, { useRef } from "react";
import CustomNavLink from "../UI/CustomNavLink";
import ActionButton from "../UI/ActionButton";
import SelectCurrency from "../UI/SelectInput";
import { currencies } from "../../constants/currencies";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setCurrency } from "../../state/ui/uiSlice";
import { useTrapFocus } from "../../hooks/useTrapFocus";
import Hamburger from "./Hamburger";

interface SidebarProps {
  isSidebarOpen: boolean;
  handleSignUpClick: () => void;
  handleOpenMobileNav: () => void;
}

function MobileSidebar({
  isSidebarOpen,
  handleSignUpClick,
  handleOpenMobileNav,
}: SidebarProps) {
  const currency = useAppSelector((state) => state.ui.currency);
  const dispatch = useAppDispatch();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useTrapFocus(sidebarRef, isSidebarOpen);

  // menu is broken its not trappable fix this, useCLickOuside
  // the menu should also close on resize if it was previously
  return (
    <aside ref={sidebarRef}>
      <Hamburger
        isSidebarOpen={isSidebarOpen}
        handleOpenMobileNav={handleOpenMobileNav}
      />
      <div
        className={`z-10 fixed right-0 px-8 pr-[min(30vh,_30rem)] py-15 h-full bg-gray-200/10 backdrop-blur-sm transition-all duration-700 ${
          isSidebarOpen ? "top-0" : "-top-200"
        }`}
      >
        <div className="flex flex-col gap-4">
          <CustomNavLink to="/">Home</CustomNavLink>
          <CustomNavLink to="/watchlist">Watchlist</CustomNavLink>
          <div className="mt-3 flex flex-col gap-2">
            <SelectCurrency
              id="currency"
              value={currency}
              options={currencies}
              onChange={(value) => dispatch(setCurrency(value))}
            />
            <ActionButton onClick={handleSignUpClick} aria-label="Sign up">
              Sign up
            </ActionButton>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default MobileSidebar;
