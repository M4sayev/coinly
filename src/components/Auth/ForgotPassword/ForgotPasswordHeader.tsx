import React from "react";
import CloseButton from "../../UI/CloseButton";

interface ForgotPasswordHeaderProps {
  onClose: () => void;
}

function ForgotPasswordHeader({ onClose }: ForgotPasswordHeaderProps) {
  return (
    <header className="mb-7 ">
      <h1 className="title font-space text-2xl mb-2  lg:text-4xl">
        Reset password
      </h1>
      <p className="font-roboto text-xs text-[var(--color-neutral-200)] lg:text-sm w-full">
        Please provide the email address that you used when you signed up for
        your account
      </p>

      <CloseButton
        onClose={onClose}
        actionText="Close Forgot Password dialog"
      />
    </header>
  );
}

export default ForgotPasswordHeader;
