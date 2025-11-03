import React from "react";
import { cn } from "../../../utils/utils";
import { X } from "lucide-react";
import ActionButton from "../../UI/ActionButton";
import FormElement from "../../UI/form/FormElement";
import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";
import type { FormValues } from "../../../types/form";
import ForgotPasswordHeader from "./ForgotPasswordHeader";
import type { AuthViewProps } from "../../../types/auth";

function ForgotPassword({ onClose, setAuthView }: AuthViewProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  const onError: SubmitErrorHandler<FormValues> = (errors) =>
    console.log(errors);
  return (
    <div
      className={cn(
        "rounded-2xl bg-[var(--color-modal)] border border-[rgba(30,33,40,0.8)]",
        "relative overflow-hidden font-roboto text-[var(--color-neutral-100)] p-10"
      )}
    >
      <ForgotPasswordHeader onClose={onClose} />
      <form className="flex flex-col gap-2">
        <FormElement
          id="emailForgotPassword"
          register={register}
          placeholder="Enter you email"
          type="email"
          label="Email"
          error={errors.emailForgotPassword}
          rules={{
            required: "Email is required",
          }}
        />
        <p className="font-roboto text-xs text-[var(--color-green-accent)] lg:text-sm w-full mb-2">
          We will send you an email that will allow you to reset your password
        </p>
        <ActionButton onClick={handleSubmit(onSubmit, onError)}>
          Reset Password
        </ActionButton>
        <ActionButton variant="secondary" onClick={() => setAuthView("login")}>
          Back to Log In
        </ActionButton>
      </form>
    </div>
  );
}

export default ForgotPassword;
