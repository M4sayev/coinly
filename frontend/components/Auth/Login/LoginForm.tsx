import React from "react";
import ActionButton from "../../UI/Buttons/ActionButton";
import PasswordField from "../../UI/form/PasswordField";
import FormElement from "../../UI/form/FormElement";
import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";
import type { AuthView } from "../../../types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserType } from "@/types/form";
import { userSchema } from "@/schemas/auth";

interface LoginFormProps {
  setAuthView: React.Dispatch<React.SetStateAction<AuthView>>;
}

function LoginForm({ setAuthView }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({
    mode: "onBlur",
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<UserType> = (data) => console.log(data);
  const onError: SubmitErrorHandler<UserType> = (errors) => console.log(errors);
  return (
    <form
      method="dialog"
      className="flex flex-col gap-4 lg:gap-6 z-10"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormElement<UserType>
        register={register}
        id="login-email-field"
        label="Email"
        type="email"
        placeholder="yourname@example.com"
        name="email"
        error={errors["email"]}
      />

      <PasswordField<UserType>
        register={register}
        name="password"
        id="login-password-field"
        label="Password"
        placeholder="Enter your password"
        error={errors["password"]}
        showForgot={true}
        onForgotPassword={() => setAuthView("reset-password")}
      />

      <ActionButton type="submit">
        <span className="py-0.5">Log In</span>
      </ActionButton>
    </form>
  );
}

export default LoginForm;
