import React from "react";
import Logo from "../assets/logo.svg?react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" bg-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        <button>
          <Logo className="w-10 h-10" />
        </button>
        <div className="flex gap-3 text-white [&>a:hover]:text-accent [&>a]:transition-colors [&>a]:duration-200">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-accent" : "text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-accent" : "text-white"
            }
          >
            About
          </NavLink>
        </div>
        <button className="px-6 py-2 bg-accent-dblue rounded leading-none text-white">
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
