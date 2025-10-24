import React from "react";

interface FormElementProps {
  id: string;
  type: string;
  label: string;
  placeholder: string;
}

function FormElement({ id, type, label, placeholder }: FormElementProps) {
  const labelClasses = "text-xs text-white capitalize lg:text-sm";
  const inputClasses =
    " w-full border-1 opacity-40 border-accent rounded px-3 py-2 text-xs mt-2 focus:opacity-90" +
    "sm:px-4 sm:py-2.5 " +
    "lg:text-sm";
  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        className={inputClasses}
      />
    </div>
  );
}

export default FormElement;
