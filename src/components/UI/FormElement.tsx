import React from "react";
import type {
  FieldError,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import type { FormValues } from "../../types/form";

interface FormElementProps {
  id: keyof FormValues;
  type: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<FormValues>;
  error?: FieldError;
  rules?: RegisterOptions<FormValues>;
}

function FormElement({
  register,
  id,
  type,
  label,
  placeholder,
  error,
  rules,
}: FormElementProps) {
  const labelClasses = "text-xs text-white capitalize lg:text-sm";
  const inputClasses =
    " w-full border-1 opacity-40 border-accent rounded px-3 py-2 text-xs mt-2 focus:opacity-90" +
    "sm:px-4 sm:py-2.5 " +
    "lg:text-sm";
  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <input
        {...register(id, rules)}
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        className={inputClasses}
      />
      {error && <p className="text-red-accent text-xs mt-1">{error.message}</p>}
    </div>
  );
}

export default FormElement;
