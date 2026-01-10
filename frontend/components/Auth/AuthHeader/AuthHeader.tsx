import { CornerDownRight } from "lucide-react";
import CloseButton from "../../UI/Buttons/CloseButton";
import type { AuthSlide, AuthView } from "../../../types/auth";

interface AuthHeaderProps {
  onCloseDialog: () => void;
  authSlide: AuthSlide;
  promptText?: string;
  titleId: AuthView;
  showArrow?: boolean;
}

function AuthHeader({
  titleId,
  onCloseDialog,
  authSlide,
  promptText = "Track your cryptocurrency now",
  showArrow = true,
}: AuthHeaderProps) {
  return (
    <header className="mb-7">
      <h2
        id={titleId}
        className="capitalize font-space text-2xl mb-2 lg:text-4xl"
      >
        {authSlide}
      </h2>
      <div className="flex capitalize font-roboto text-xs text-neutral-200 lg:text-sm w-full items-end">
        <CornerDownRight
          aria-hidden="true"
          className={showArrow ? "" : "hidden"}
        />
        <p>{promptText}</p>
      </div>
      <CloseButton
        onClose={onCloseDialog}
        ariaLabel={`Close ${authSlide} dialog`}
      />
    </header>
  );
}

export default AuthHeader;
