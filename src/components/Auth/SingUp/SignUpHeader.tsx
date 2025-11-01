import { CornerDownRight, X } from "lucide-react";
import React from "react";
import { cn } from "../../../utils/utils";

interface SignUpHeaderProps {
  onClose: () => void;
}

function SignUpHeader({ onClose }: SignUpHeaderProps) {
  return (
    <header className="mb-7">
      <h1 id="Signup" className="title font-space text-2xl mb-2 lg:text-4xl">
        Sign up
      </h1>
      <div className="flex capitalize font-roboto text-xs text-[var(--color-neutral-200)] lg:text-sm w-full items-end">
        <CornerDownRight aria-hidden="true" />
        <p>Track your cryptocurrency now</p>
      </div>
      <button
        className={cn(
          "absolute top-7 right-7 cursor-pointer text-2xl text-[var(--color-neutral-100)]",
          " transition-all duration-300 ease-in-out",
          "hover:text-accent hover:scale-120"
        )}
        aria-label="Close Sign up dialog"
        onClick={onClose}
      >
        <X aria-hidden="true" />
      </button>
    </header>
  );
}

export default SignUpHeader;
