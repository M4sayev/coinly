import { errorClasses } from "../../../constants/form";
import type { FieldError } from "react-hook-form";

interface FormErrorMessageProps {
  id: string;
  error: FieldError | undefined;
}

function FormErrorMessage({ id, error }: FormErrorMessageProps) {
  if (!error) return;
  return (
    <p data-test="form-error-message" id={id} className={errorClasses}>
      {error.message}
    </p>
  );
}

export default FormErrorMessage;
