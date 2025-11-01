import React, { forwardRef, type Ref, type SetStateAction } from "react";
import ActionButton from "../../UI/ActionButton";
import SocialAuthButtons from "../OAuthButtons";
import PasswordField from "../../UI/form/PasswordField";
import FormElement from "../../UI/form/FormElement";
import { cn } from "../../../utils/utils";
import SignUpHeader from "./SignUpHeader";
import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";
import type { FormValues } from "../../../types/form";
import SignUpForm from "./SignUpForm";
import SignUpFooter from "./SignUpFooter";

interface SingUpProps {
  closeDialog: () => void;
}

function SignUp({ closeDialog }: SingUpProps, ref: Ref<HTMLDivElement | null>) {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-[rgba(102,138,255,0.05)] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-[rgba(30,33,40,0.8)]",
        "relative overflow-hidden p-10 font-roboto text-white"
      )}
    >
      <SignUpHeader closeDialog={closeDialog} />
      <SignUpForm />
      <SignUpFooter />
    </div>
  );
}

export default forwardRef(SignUp);
