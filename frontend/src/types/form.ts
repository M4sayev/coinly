import type {
  FieldError,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import type { AuthView } from "./auth";

export type FormValues = {
  "login-email-field": string;
  "login-password-field": string;
  "signup-email-field": string;
  "fp-email-field": string;
  "signup-password-field": string;
  "agree-to-terms-field": string;
  test: string;
};

export interface FormElementProps {
  id: keyof FormValues;
  type: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<FormValues>;
  error?: FieldError;
  rules?: RegisterOptions<FormValues>;
}

export interface PasswordFieldProps extends Omit<FormElementProps, "type"> {
  showForgot?: boolean;
  onForgotPassword?: React.Dispatch<React.SetStateAction<AuthView>>;
}

export type TermKeysToRemove = "type" | "label" | "placeholder";
