import type {
  FieldError,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export type FormValues = {
  username: string;
  password: string;
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
