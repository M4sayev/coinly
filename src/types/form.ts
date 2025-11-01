import type {
  FieldError,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export type FormValues = {
  email: string;
  password: string;
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
}

export type TermKeysToRemove = "type" | "label" | "placeholder";

export interface AgreeToTermsProps
  extends Omit<FormElementProps, TermKeysToRemove> {}
