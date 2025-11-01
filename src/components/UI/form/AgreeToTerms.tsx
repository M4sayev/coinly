import React from "react";
import type { AgreeToTermsProps } from "../../../types/form";
import { errorClasses } from "../../../constants/form";

function AgreeToTerms({ id, register, error, rules }: AgreeToTermsProps) {
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
        <div className="text-xs text-neutral-300 lg:text-sm">
          <span>I agree to the</span>
          <button
            type="button"
            className="ml-1 text-accent"
            aria-label="View our Terms and Conditions"
          >
            Terms and Conditions
          </button>
        </div>
      </label>
      {error && <p className={errorClasses}>{error.message}</p>}
    </div>
  );
}

export default AgreeToTerms;
