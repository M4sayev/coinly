import type { AuthSlide } from "../../../types/auth";
import OAuthButtons from "../OAuthButtons/OAuthButtons";

interface AuthFooterProps {
  promptText: string;
  authSlide: AuthSlide;
  setAuth: () => void;
}

function AuthFooter({ promptText, authSlide, setAuth }: AuthFooterProps) {
  return (
    <footer className="relative flex flex-col gap-5 mt-5 z-10">
      <OAuthButtons />
      <div className="text-center text-xs text-[var(--color-neutral-300)] capitalize lg:text-sm">
        <span>{promptText}</span>
        <button
          type="button"
          className="capitalize text-sm cursor-pointer ml-1 text-[var(--color-accent)]"
          aria-label={`Go to ${authSlide} form`}
          onClick={setAuth}
        >
          {authSlide}
        </button>
      </div>
    </footer>
  );
}

export default AuthFooter;
