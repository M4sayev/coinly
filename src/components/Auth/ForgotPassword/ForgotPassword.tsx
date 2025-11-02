import React from "react";
import { cn } from "../../../utils/utils";
import { X } from "lucide-react";
import ActionButton from "../../UI/ActionButton";

interface ForgotPasswordProps {
  onClose: () => void;
}

function ForgotPassword({ onClose }: ForgotPasswordProps) {
  return (
    <div
      className={cn(
        "bg-[var(--color-modal)] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-[rgba(30,33,40,0.8)]",
        "relative overflow-hidden p-10 font-roboto text-[var(--color-neutral-100)] backdrop-blur-lg"
      )}
    >
      <header className="mb-7">
        <h1 className="title font-space text-2xl mb-2 lg:text-4xl">
          Forgot your password
        </h1>
        <p className="capitalize font-roboto text-xs text-[var(--color-neutral-200)] lg:text-sm w-full">
          Please provide the email address that you used when you signed up for
          your account
        </p>

        <button
          className={cn(
            "absolute top-7 right-7 cursor-pointer text-2xl text-[var(--color-neutral-100)]",
            " transition-all duration-300 ease-in-out",
            "hover:text-accent hover:scale-120"
          )}
          aria-label={`Close Forgot Password dialog`}
          onClick={onClose}
        >
          <X aria-hidden="true" />
        </button>
      </header>
      <p className="capitalize font-roboto text-xs text-[var(--color-neutral-200)] lg:text-sm w-full">
        We will send you an email that will allow you to reset your password
      </p>
      <ActionButton>Reset Password</ActionButton>
    </div>
  );
}

export default ForgotPassword;
