import React from "react";
import ActionButton from "../../UI/Buttons/ActionButton";
import PasswordField from "../../UI/form/PasswordField";
import FormElement from "../../UI/form/FormElement";
import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";
import type { FormValues } from "../../../types/form";
import type { AuthView } from "../../../types/auth";

interface LoginFormProps {
  setAuthView: React.Dispatch<React.SetStateAction<AuthView>>;
}

function LoginForm({ setAuthView }: LoginFormProps) {
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
      className="flex flex-col gap-4 lg:gap-6 z-10"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormElement
        register={register}
        id="emailLogin"
        label="Email"
        type="email"
        placeholder="yourname@example.com"
        rules={{
          required: "Email is required",
        }}
        error={errors.emailLogin}
      />

      <PasswordField
        register={register}
        id="passwordLogin"
        label="Password"
        placeholder="Enter your password"
        error={errors.passwordLogin}
        rules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
        }}
        showForgot={true}
        onForgotPassword={setAuthView}
      />

      <ActionButton type="submit">
        <span className="py-0.5">Log In</span>
      </ActionButton>
    </form>
  );
}

export default LoginForm;
