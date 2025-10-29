import React from "react";
import CustomNavLink from "../UI/CustomNavLink";
import { CgProfile } from "react-icons/cg";
import ActionButton from "../UI/ActionButton";

interface SidebarProps {
  isSidebarOpen: boolean;
  handleSignUpClick: () => void;
}

function MobileSidebar({ isSidebarOpen, handleSignUpClick }: SidebarProps) {
  return (
    <aside
      className={`z-10 fixed right-0 px-8 pr-[min(30vh,_30rem)] py-15 h-full bg-gray-200/10 backdrop-blur-sm transition-all duration-700 ${
        isSidebarOpen ? "top-0" : "-top-200"
      }`}
    >
      <div className="flex flex-col gap-4">
        <CustomNavLink to="/">Home</CustomNavLink>
        <CustomNavLink to="/watchlist">Watchlist</CustomNavLink>
        <div className="mt-6">
          <ActionButton onClick={handleSignUpClick} aria-label="Sign up">
            Sign up
          </ActionButton>
        </div>
      </div>
    </aside>
  );
}

export default MobileSidebar;
