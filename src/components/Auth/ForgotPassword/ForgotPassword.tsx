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
import CloseButton from "../../UI/CloseButton";

interface ForgotPasswordProps {
  onClose: () => void;
}

function ForgotPassword({ onClose }: ForgotPasswordProps) {
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
      <header className="mb-7 ">
        <h1 className="title font-space text-2xl mb-2  lg:text-4xl">
          Reset password
        </h1>
        <p className=" font-roboto text-xs text-[var(--color-neutral-200)] lg:text-sm w-full">
          Please provide the email address that you used when you signed up for
          your account
        </p>

        <CloseButton
          onClose={onClose}
          actionText="Close Forgot Password dialog"
        />
      </header>
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
      </form>
    </div>
  );
}

export default ForgotPassword;
