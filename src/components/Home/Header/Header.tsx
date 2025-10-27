import React from "react";
import Azn from "../../../assets/azn_outline.svg?react";
import { cn } from "../../../utils/utils";
import Canvas from "../../UI/Canvas";

function Header() {
  return (
    <header className="relative font-roboto min-h-screen text-white h-full bg-black flex items-center justify-center overflow-hidden">
      <Canvas className="w-full h-auto absolute p-15 hidden lg:block" />
      <div className="max-w-7xl mx-auto w-full h-140 flex items-center justify-center lg:justify-between gap-10 px-4 py-10">
        <div className="absolute lg:relative flex justify-center z-0 max-w-lg gap-4 lg:ml-10 w-full h-full">
          <Azn className="w-full h-full opacity-10 lg:hidden" />
        </div>
        <div className="relative z-10 text-center  lg:text-left px-4 lg:max-w-1/2">
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
