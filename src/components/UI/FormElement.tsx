import React from "react";
import type { FormElementProps } from "../../types/form";
import { errorClasses, inputClasses, labelClasses } from "../../constants/form";

function FormElement({
  register,
  id,
  type,
  label,
  placeholder,
  error,
  rules,
}: FormElementProps) {
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
        autoComplete={type}
      />
      {error && <p className={errorClasses}>{error.message}</p>}
    </div>
  );
}

export default FormElement;
