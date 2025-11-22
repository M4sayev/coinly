import { useState } from "react";
import type { PasswordFieldProps } from "../../../types/form";
import { inputClasses, labelClasses } from "../../../constants/form";
import { Eye, EyeOff } from "lucide-react";
import FormErrorMessage from "./FormErrorMessage";

function PasswordField({
  register,
  id,
  label,
  placeholder,
  error,
  rules,
  showForgot = true,
  onForgotPassword,
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const EyeIcon = showPassword ? Eye : EyeOff;
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className={`${labelClasses} flex justify-between`}>
        <span>{label}</span>
        {showForgot && onForgotPassword ? (
          <button
            type="button"
            className="text-xs text-[var(--color-accent)]"
            aria-label="Go to Forgot Password Form"
            onClick={() => onForgotPassword("forgotPassword")}
          >
            Forgot Password?
          </button>
        ) : (
          ""
        )}
      </label>
      <div className="relative">
        <input
          {...register(id, rules)}
          id={id}
          type={showPassword ? "text" : "password"}
          name={id}
          aria-invalid={error ? "true" : "false"}
          placeholder={placeholder}
          className={inputClasses}
          autoComplete={"current-password"}
          aria-describedby={error ? errorId : undefined}
        />
        <button
          className="group absolute top-0 right-3 h-full grid place-items-center focus:outline-none"
          type="button"
          aria-label={showPassword ? "Show Password" : "Hide Password"}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          <EyeIcon
            aria-hidden="true"
            className="w-4 h-4 text-[var(--color-neutral-100)] group-focus-visible:outline-1"
          />
        </button>
      </div>
      <FormErrorMessage id={errorId} error={error} />
    </div>
  );
}

export default PasswordField;
