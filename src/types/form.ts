import type {
  FieldError,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import type { AuthView } from "../types/auth";

export type FormValues = {
  emailLogin: string;
  passwordLogin: string;
  emailSignup: string;
  emailForgotPassword: string;
  passwordSignup: string;
  agreeToTerms: string;
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
