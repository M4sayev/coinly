import React, { useState } from "react";
import type { FormElementProps } from "../../types/form";
import { errorClasses, inputClasses, labelClasses } from "../../constants/form";

interface PasswordFieldProps extends Omit<FormElementProps, "type"> {
  showForgot?: boolean;
}

function PasswordField({
  register,
  id,
  label,
  placeholder,
  error,
  rules,
  showForgot = true,
}: PasswordFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={`${labelClasses} flex justify-between`}>
        <span>{label}</span>
        {showForgot ? (
          <button className="text-xs text-accent">Forgot Password?</button>
        ) : (
          ""
        )}
      </label>
      <div>
        <input
          {...register(id, rules)}
          id={id}
          type={"password"}
          name={id}
          placeholder={placeholder}
          className={inputClasses}
          autoComplete={"current-password"}
        />
      </div>
      {error && <p className={errorClasses}>{error.message}</p>}
    </div>
  );
}

export default PasswordField;
