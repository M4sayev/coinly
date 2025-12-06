import type { FormElementProps } from "../../../types/form";
import { inputClasses, labelClasses } from "../../../constants/form";
import FormErrorMessage from "./FormErrorMessage";

function FormElement({
  register,
  id,
  type,
  label,
  placeholder,
  error,
  rules,
}: FormElementProps) {
  const errorId = `${id}-error`;
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
        aria-invalid={error ? "true" : "false"}
        placeholder={placeholder}
        className={inputClasses}
        autoComplete={type}
        aria-describedby={error ? errorId : undefined}
      />
      <FormErrorMessage id={errorId} error={error} />
    </div>
  );
}

export default FormElement;
