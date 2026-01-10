import type { FormElementProps, TermKeysToRemove } from "../../../types/form";
import FormErrorMessage from "./FormErrorMessage";
import TermsAndPolicyLink from "./TernsAndPolicyLink";

function TermsAndPolicy({
  id,
  register,
  error,
  rules,
}: Omit<FormElementProps, TermKeysToRemove>) {
  const errorId = `${id}-error`;
  return (
    // think of a better structure for accessiblity
    <div>
      <label data-testid="terms-n-policy" className="flex gap-2 cursor-pointer">
        <input
          {...register(id, rules)}
          className="cursor-pointer"
          type="checkbox"
          name={id}
          id={id}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? errorId : undefined}
        />
        <div className="text-xs text-neutral-300 lg:text-sm">
          <span>I agree to our</span>
          <TermsAndPolicyLink text="Terms" to="/terms-and-conditions" />
          <span> and</span>
          <TermsAndPolicyLink text="Privacy Policy" to="/privacy-policy" />
        </div>
      </label>
      <FormErrorMessage id={errorId} error={error} />
    </div>
  );
}

export default TermsAndPolicy;
