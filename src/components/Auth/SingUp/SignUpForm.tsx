import React from "react";
import PasswordField from "../../UI/PasswordField";
import FormElement from "../../UI/FormElement";
import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";
import type { FormValues } from "../../../types/form";
import ActionButton from "../../UI/ActionButton";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  const onError: SubmitErrorHandler<FormValues> = (errors) =>
    console.log(errors);

  return (
    <form
      method="dialog"
      className="flex flex-col gap-6 z-10"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormElement
        register={register}
        id={"username"}
        label={"Email/Username"}
        type="text"
        placeholder="Enter your email or username"
        rules={{
          required: "Email or username is required",
        }}
        error={errors.username}
      />

      <PasswordField
        register={register}
        id={"password"}
        label={"Password"}
        placeholder="Enter your password"
        error={errors.password}
        rules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
        }}
        showForgot={false}
      />

      <ActionButton type="submit">
        <span className="py-0.5">Create account</span>
      </ActionButton>
    </form>
  );
}

export default SignUpForm;
