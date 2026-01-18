import { useState } from "react";
import type { PasswordFieldProps } from "../../../types/form";
import { inputClasses, labelClasses } from "../../../constants/form";
import { Eye, EyeOff } from "lucide-react";
import FormErrorMessage from "./FormErrorMessage";
import { FieldValues } from "react-hook-form";

function PasswordField<T extends FieldValues>({
  register,
  id,
  name,
  label,
  placeholder,
  error,
  showForgot = true,
  onForgotPassword,
}: PasswordFieldProps<T>) {
  const [showPassword, setShowPassword] = useState(false);

  const EyeIcon = showPassword ? Eye : EyeOff;
  const errorId = `${id}-error`;
  return (
    <div>
      <label
        data-testid="password-label"
        htmlFor={id}
        className={`${labelClasses} flex justify-between`}
      >
        <span>{label}</span>
        {showForgot && onForgotPassword ? (
          <button
            type="button"
            className="text-xs text-accent"
            aria-label="Go to Reset Password Form"
            onClick={onForgotPassword}
          >
            Forgot Password?
          </button>
        ) : (
          ""
        )}
      </label>
      <div className="relative">
        <input
          {...register(name)}
          id={id}
          type={showPassword ? "text" : "password"}
          aria-invalid={error ? "true" : "false"}
          placeholder={placeholder}
          className={inputClasses}
          autoComplete={"current-password"}
          aria-describedby={error ? errorId : undefined}
        />
        <button
          data-testid="password-visibility-button"
          className="group absolute top-0 right-3 h-full grid place-items-center focus:outline-none"
          type="button"
          aria-label={!showPassword ? "Show Password" : "Hide Password"}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          <EyeIcon
            aria-hidden="true"
            className="w-4 h-4 text-neutral-100 group-focus-visible:outline-1"
          />
        </button>
      </div>
      <FormErrorMessage id={errorId} error={error} />
    </div>
  );
}

export default PasswordField;
