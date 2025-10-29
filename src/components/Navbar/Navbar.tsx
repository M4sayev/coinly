import React from "react";
import Logo from "../../assets/logo.svg?react";
import { Link } from "react-router-dom";
import CustomNavLink from "../UI/CustomNavLink";
import { GoArrowRight } from "react-icons/go";
import ActionButton from "../UI/ActionButton";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { closeSidebar, openSidebar, openSignUp } from "../../state/ui/uiSlice";
import SignUp from "../SingUp/SignUp";
import Hamburger from "./Hamburger";
import MobileSidebar from "./MobileSidebar";

function Navbar() {
  const isSidebarOpen = useAppSelector((state) => state.ui.isSidebarOpen);
  const dispatch = useAppDispatch();

  const handleSignUpClick = () => {
    dispatch(openSignUp());
  };

  const handleOpenMobileNav = () => {
    if (!isSidebarOpen) dispatch(openSidebar());
    else dispatch(closeSidebar());
  };

  return (
    <nav className="fixed left-0 right-0 z-10 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 font-roboto">
        <Link to="/" className="cursor-pointer" aria-label="Go to home page">
          <Logo className="w-9 h-9" />
        </Link>
        <div className="md:gap-5 hidden md:flex">
          <CustomNavLink to="/">Home</CustomNavLink>
          <CustomNavLink to="/watchlist">Watchlist</CustomNavLink>
        </div>
        <div className="hidden md:block">
          <ActionButton onClick={handleSignUpClick} aria-label="Sign up">
            Sign up
            <span
              className="text-white invisible absolute md:visible md:relative"
              aria-hidden="true"
            >
              <GoArrowRight />
            </span>
          </ActionButton>
        </div>
        <div className="md:hidden">
          <Hamburger
            isSidebarOpen={isSidebarOpen}
            handleOpenMobileNav={handleOpenMobileNav}
          />
        </div>
      </div>
      <div className="md:hidden">
        <MobileSidebar
          handleSignUpClick={handleSignUpClick}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
      <SignUp />
    </nav>
  );
}

export default Navbar;
