import React, { useEffect } from "react";
import Logo from "../../assets/logo.svg?react";
import { Link } from "react-router-dom";
import CustomNavLink from "../UI/CustomNavLink";
import ActionButton from "../UI/ActionButton";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  closeSidebar,
  openSidebar,
  openSignUp,
  setCurrency,
} from "../../state/ui/uiSlice";
import MobileSidebar from "./MobileSidebar";
import SelectInput from "../UI/SelectInput";
import { currencies } from "../../constants/currencies";
import { LogIn } from "lucide-react";
import AuthDialog from "../Auth/AuthDialog";
import ToggleTheme from "./ToggleTheme";

function Navbar() {
  const isSidebarOpen = useAppSelector((state) => state.ui.isSidebarOpen);
  const currecy = useAppSelector((state) => state.ui.currency);
  const dispatch = useAppDispatch();

  const handleSignUpClick = () => {
    dispatch(openSignUp());
  };

  const handleHamburgerClick = () => {
    if (!isSidebarOpen) dispatch(openSidebar());
    else handleCloseMobileNav();
  };

  const handleCloseMobileNav = () => {
    dispatch(closeSidebar());
  };

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
  }, [isSidebarOpen]);

  return (
    <nav className="fixed left-0 right-0 z-10 ">
      <div className="relative max-w-7xl mx-auto flex justify-between items-center px-6 py-3 font-roboto">
        <Link to="/" className="cursor-pointer" aria-label="Go to home page">
          <Logo className="w-9 h-9" />
        </Link>
        <div className="absolute md:gap-5 hidden md:flex md:w-1/2 md:m-auto left-0 right-0 justify-center">
          <CustomNavLink to="/">Home</CustomNavLink>
          <CustomNavLink to="/watchlist">Watchlist</CustomNavLink>
        </div>
        <div className="hidden md:flex gap-5">
          <SelectInput
            id="currency"
            value={currecy}
            options={currencies}
            onChange={(value) => dispatch(setCurrency(value))}
          />
          <div className="group">
            <ActionButton onClick={handleSignUpClick} aria-label="Sign up">
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
          handleSignUpClick={handleSignUpClick}
          isSidebarOpen={isSidebarOpen}
          handleHamburgerClick={handleHamburgerClick}
          handleCloseMobileNav={handleCloseMobileNav}
        />
      </div>
      <AuthDialog />
    </nav>
  );
}

export default Navbar;
