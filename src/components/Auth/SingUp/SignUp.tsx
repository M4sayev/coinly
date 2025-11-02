import React, { forwardRef, type Ref } from "react";
import { cn } from "../../../utils/utils";
import SignUpForm from "./SignUpForm";
import AuthFooter from "../AuthFooter";
import AuthHeader from "../AuthHeader";

interface SingUpProps {
  onClose: () => void;
}

function SignUp({ onClose }: SingUpProps, ref: Ref<HTMLDivElement | null>) {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-[var(--color-modal)] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-[rgba(30,33,40,0.8)]",
        "relative overflow-hidden p-10 font-roboto text-[var(--color-neutral-100)]"
      )}
    >
      <AuthHeader onCloseDialog={onClose} actionText="Sign Up" />
      <SignUpForm />
      <AuthFooter promptText="Already have an account?" actionText="Sign In" />
    </div>
  );
}

export default forwardRef(SignUp);
