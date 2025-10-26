import React from "react";
import Logo from "../../assets/logo.svg?react";
import { Link } from "react-router-dom";
import CustomNavLink from "../UI/CustomNavLink";
import { GoArrowRight } from "react-icons/go";
import ActionButton from "../UI/ActionButton";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { openSignUp } from "../../state/ui/uiSlice";
import SignUp from "../SingUp/SignUp";

function Navbar() {
  const dispatch = useAppDispatch();

  const handleSignUpClick = () => {
    dispatch(openSignUp());
  };

  return (
    <nav className="absolute left-0 right-0 z-10 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2 font-roboto">
        <Link to="/" className="cursor-pointer" aria-label="Go to home page">
          <Logo className="w-6 h-6 md:w-8 md:h-8" />
        </Link>
        <div className="flex gap-3 md:gap-5">
          <CustomNavLink to="/">Home</CustomNavLink>
          <CustomNavLink to="/watchlist">Watchlist</CustomNavLink>
        </div>
        <ActionButton onClick={handleSignUpClick} aria-label="Sign up">
          Sign up
          <span
            className="text-white invisible absolute md:visible md:relative"
            aria-hidden="true"
          >
            <GoArrowRight />
          </span>
        </ActionButton>
        <SignUp />
      </div>
    </nav>
  );
}

export default Navbar;
