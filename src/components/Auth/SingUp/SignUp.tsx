import React, { forwardRef, type Ref } from "react";
import { cn } from "../../../utils/utils";
import SignUpHeader from "./SignUpHeader";
import SignUpForm from "./SignUpForm";
import SignUpFooter from "./SignUpFooter";

interface SingUpProps {
  onCloseDialog: () => void;
}

function SignUp(
  { onCloseDialog }: SingUpProps,
  ref: Ref<HTMLDivElement | null>
) {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-[var(--color-modal)] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-[rgba(30,33,40,0.8)]",
        "relative overflow-hidden p-10 font-roboto text-[var(--color-neutral-100)]"
      )}
    >
      <SignUpHeader onClose={onCloseDialog} />
      <SignUpForm />
      <SignUpFooter />
    </div>
  );
}

export default forwardRef(SignUp);
