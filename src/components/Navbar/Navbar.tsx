import React from "react";
import Logo from "../../assets/logo.svg?react";
import { Link } from "react-router-dom";
import CustomNavLink from "../UI/CustomNavLink";
import { GoArrowRight } from "react-icons/go";
import ActionButton from "../UI/ActionButton";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { closeSignUp, openSignUp } from "../../state/ui/uiSlice";

function Navbar() {
  const isSignUpModalOpen = useAppSelector(
    (state) => state.ui.isSignUpModalOpen
  );
  const dispatch = useAppDispatch();

  const handleSignUpClick = () => {
    dispatch(openSignUp());
  };

  const handlCloseSingUpPopupClick = () => {
    dispatch(closeSignUp());
  };

  return (
    <nav className=" bg-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2 font-roboto">
        <Link to="/" className="cursor-pointer" aria-label="Go to home page">
          <Logo className="w-8 h-8 md:w-10 md:h-10" />
        </Link>
        <div className="flex gap-3 md:gap-5">
          <CustomNavLink to="/">Home</CustomNavLink>
          <CustomNavLink to="/about">About</CustomNavLink>
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
      </div>
    </nav>
  );
}

export default Navbar;
