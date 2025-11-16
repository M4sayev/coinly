import { errorClasses } from "../../../constants/form";
import type { FormElementProps, TermKeysToRemove } from "../../../types/form";
import TermsAndPolicyLink from "./TernsAndPolicyLink";

function TermsAndPolicy({
  id,
  register,
  error,
  rules,
}: Omit<FormElementProps, TermKeysToRemove>) {
  return (
    <div>
      <label className="flex gap-2 cursor-pointer">
        <input
          {...register(id, rules)}
          className="cursor-pointer"
          type="checkbox"
          name={id}
          id={id}
        />
        <div className="text-xs text-[var(--color-neutral-300)] lg:text-sm">
          <span>I agree to our</span>
          <TermsAndPolicyLink text="Terms" to="/terms-and-conditions" />
          <span> and</span>
          <TermsAndPolicyLink text="Privacy Policy" to="/privacy-policy" />
        </div>
      </label>
      {error && <p className={errorClasses}>{error.message}</p>}
    </div>
  );
}

export default TermsAndPolicy;
