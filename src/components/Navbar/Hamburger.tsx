import React from "react";
import { cn } from "../../utils/utils";
import { useAppSelector } from "../../hooks/reduxHooks";

interface HamburgerProps {
  handleOpenMobileNav: () => void;
  isSidebarOpen: boolean;
}

function Hamburger({ handleOpenMobileNav, isSidebarOpen }: HamburgerProps) {
  return (
    <button
      onClick={handleOpenMobileNav}
      aria-haspopup="true"
      aria-expanded={isSidebarOpen}
      aria-label="Open menu"
      className={cn(
        "leading-none roboto-flex relative lg:hidden w-8 h-8 flex flex-col justify-around"
      )}
    >
      <span
        className={cn(
          "block h-0.5 bg-accent origin-left transition-all duration-300 ease-in-out",
          isSidebarOpen
            ? "rotate-45 w-[50%] translate-x-[4px] -translate-y-0.25"
            : "w-[70%]"
        )}
      ></span>
      <span
        className={cn(
          "block h-0.5 w-full bg-accent transition-all duration-300 ease-in-out",
          isSidebarOpen ? "-rotate-45 " : ""
        )}
      ></span>
      <span
        className={cn(
          "block h-0.5 bg-accent origin-left w-[50%] transition-all duration-300 ease-in-out",
          isSidebarOpen
            ? "origin-right rotate-45 translate-x-[11px] translate-y-[1px]"
            : ""
        )}
      ></span>
    </button>
  );
}

export default Hamburger;
