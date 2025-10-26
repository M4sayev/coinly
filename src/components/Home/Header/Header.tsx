import React from "react";
import Azn from "../../../assets/azn_outline.svg?react";
import { cn } from "../../../utils/utils";

function Header() {
  return (
    <header className="font-roboto min-h-screen text-white h-full bg-black flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-center lg:justify-between gap-10 px-4 py-10">
        <div className="absolute lg:relative flex justify-center z-0 max-w-lg gap-4 lg:ml-10">
          <Azn className="w-full h-full" />
        </div>
        <div className="relative z-10 text-center h-full lg:text-left px-4 lg:max-w-1/2">
          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-6 ">
            Track the future of finance
          </h1>
          <p className="text-neutral-200">
            Follow coins by adding to watchlist
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
