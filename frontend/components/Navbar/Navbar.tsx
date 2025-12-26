"use client";
import { useCallback, useEffect } from "react";
import CustomNavLink from "../UI/CustomNavLink";
import ActionButton from "../UI/Buttons/ActionButton";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  closeSidebar,
  openSidebar,
  openSignUp,
  setCurrency,
} from "../../state/ui/uiSlice";
import MobileSidebar from "./MobileSidebar";
import { currencies } from "../../constants/currencies";
import { LogIn } from "lucide-react";
import AuthDialog from "../Auth/AuthDialog/AuthDialog";
import ToggleTheme from "./ToggleTheme";
import SelectDropdown from "../UI/SelectDropdown/SelectDropdown";
import Logo from "../UI/Logo/Logo";

function Navbar() {
  const isSidebarOpen = useAppSelector((state) => state.ui.isSidebarOpen);
  const currency = useAppSelector((state) => state.ui.currency);
  const dispatch = useAppDispatch();

  const handleSignUpClick = () => {
    dispatch(openSignUp());
  };

  const handleHamburgerClick = () => {
    if (!isSidebarOpen) dispatch(openSidebar());
    else handleCloseMobileNav();
  };

  const handleCloseMobileNav = useCallback(() => {
    dispatch(closeSidebar());
  }, [dispatch]);

  // Close the sidebar if the window is resized to a bigger while its open
  useEffect(() => {
    if (!isSidebarOpen) return;
    const handleResize = () => {
      if (isSidebarOpen && window.innerWidth > 768) {
        handleCloseMobileNav();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSidebarOpen, handleCloseMobileNav]);

  return (
    <header className="fixed left-0 right-0 z-10">
      <div className=" relative max-w-7xl mx-auto flex justify-between items-center px-6 py-3 font-roboto">
        <Logo linkTo="/" ariaLabel="Go to home page" />
        <nav className="absolute md:gap-5 hidden md:flex md:w-1/2 md:m-auto left-0 right-0 justify-center">
          <CustomNavLink to="/">Home</CustomNavLink>
          <CustomNavLink to="/watchlist">Watchlist</CustomNavLink>
        </nav>
        <div className="hidden md:flex gap-5 h-full">
          <SelectDropdown
            id="currency"
            value={currency}
            options={currencies}
            onChange={(value) => dispatch(setCurrency(value))}
          />

          <div className="group">
            <ActionButton
              onClick={handleSignUpClick}
              aria-label="Open authentication dialog for sign up or Log in"
            >
              Sign up
              <span
                className="hidden text-[var(--color-neutral-100)] absolute lg:block md:relative transition-all group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <LogIn className="w-4 h-4 text-white" aria-hidden="true" />
              </span>
            </ActionButton>
          </div>
          <ToggleTheme />
        </div>
      </div>
      <div className="md:hidden">
        <MobileSidebar
          onSignUpClick={handleSignUpClick}
          isSidebarOpen={isSidebarOpen}
          onHamburgerClick={handleHamburgerClick}
          onCloseMobileNav={handleCloseMobileNav}
        />
      </div>
      <AuthDialog />
    </header>
  );
}

export default Navbar;
