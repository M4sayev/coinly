import React from "react";
import SocialAuthButtons from "./OAuthButtons";

interface AuthFooterProps {
  promptText: string;
  actionText: string;
  setAuth: () => void;
}

function AuthFooter({ promptText, actionText, setAuth }: AuthFooterProps) {
  console.log(setAuth);
  return (
    <footer className="relative flex flex-col gap-5 mt-5 z-10">
      <SocialAuthButtons />
      <div className="text-center text-xs text-[var(--color-neutral-300)] capitalize lg:text-sm">
        <span>{promptText}</span>
        <button
          type="button"
          className="text-sm cursor-pointer ml-1 text-[var(--color-accent)]"
          aria-label={`Go to ${actionText} form`}
          onClick={setAuth}
        >
          {actionText}
        </button>
      </div>
    </footer>
  );
}

export default AuthFooter;
