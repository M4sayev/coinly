import { CornerDownRight, X } from "lucide-react";
import React from "react";
import { cn } from "../../utils/utils";
import CloseButton from "../UI/CloseButton";

interface AuthHeaderProps {
  onCloseDialog: () => void;
  actionText: string;
  promptText?: string;
}

function AuthHeader({
  onCloseDialog,
  actionText,
  promptText = "Track your cryptocurrency now",
}: AuthHeaderProps) {
  return (
    <header className="mb-7">
      <h1
        id={actionText}
        className="title font-space text-2xl mb-2 lg:text-4xl"
      >
        {actionText}
      </h1>
      <div className="flex capitalize font-roboto text-xs text-[var(--color-neutral-200)] lg:text-sm w-full items-end">
        <CornerDownRight aria-hidden="true" />
        <p>{promptText}</p>
      </div>
      <CloseButton
        onClose={onCloseDialog}
        actionText={`Close ${actionText} dialog`}
      />
    </header>
  );
}

export default AuthHeader;
