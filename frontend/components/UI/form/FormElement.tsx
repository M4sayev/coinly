import type { FormElementProps } from "../../../types/form";
import { inputClasses, labelClasses } from "../../../constants/form";
import FormErrorMessage from "./FormErrorMessage";
import { FieldValues } from "react-hook-form";

function FormElement<T extends FieldValues>({
  register,
  name,
  id,
  type,
  label,
  placeholder,
  error,
}: FormElementProps<T>) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <input
        {...register(name)}
        id={id}
        type={type}
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
