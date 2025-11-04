import { errorClasses } from "../../../constants/form";
import { Link } from "react-router-dom";
import type { FormElementProps, TermKeysToRemove } from "../../../types/form";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { closeSignUp } from "../../../state/ui/uiSlice";

interface LinkProps {
  text: string;
  to: string;
}

function TermsAndPolicyLink({ text, to }: LinkProps) {
  const dispatch = useAppDispatch();

  const handleCloseModal = () => dispatch(closeSignUp());
  return (
    <Link
      onClick={handleCloseModal}
      to={to}
      type="button"
      className="ml-1 text-[var(--color-accent)]"
      aria-label={`View our {text}`}
    >
      {text}
    </Link>
  );
}

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
