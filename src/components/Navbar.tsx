import React from "react";
import Logo from "../assets/logo.svg?react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <button>
          <Logo />
        </button>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <button>Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;
