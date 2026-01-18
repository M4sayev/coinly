import { emailOnlySchema, userSchema, userSingupSchema } from "@/schemas/auth";
import type {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import z from "zod";

export type FormValues = {
  "login-email-field": string;
  "login-password-field": string;
  "signup-email-field": string;
  "rp-email-field": string;
  "signup-password-field": string;
  "agree-to-terms-field": string;
  test: string;
};

export interface FormElementProps<T extends FieldValues> {
  id: keyof FormValues;
  name: Path<T>;
  type: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<T>;
  error?: FieldError;
}

export interface PasswordFieldProps<T extends FieldValues> extends Omit<
  FormElementProps<T>,
  "type"
> {
  showForgot?: boolean;
  onForgotPassword?: () => void;
}

export type TermKeysToRemove = "type" | "label" | "placeholder";

export type UserType = z.infer<typeof userSchema>;
export type UserSingupType = z.infer<typeof userSingupSchema>;
export type EmailOnlySchemaType = z.infer<typeof emailOnlySchema>;
