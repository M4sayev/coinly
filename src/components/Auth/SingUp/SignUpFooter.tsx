import React from "react";
import ActionButton from "../../UI/ActionButton";
import SocialAuthButtons from "../OAuthButtons";

function SignUpFooter() {
  return (
    <footer className="relative flex flex-col gap-5 mt-5 z-10">
      <SocialAuthButtons />
      <div className="text-center text-xs text-neutral-300 capitalize lg:text-sm">
        <span>Already have an account?</span>
        <button
          type="button"
          className="text-sm cursor-pointer ml-1 text-accent"
          aria-label="Go to sign-in form"
        >
          Sign In
        </button>
      </div>
    </footer>
  );
}

export default SignUpFooter;
