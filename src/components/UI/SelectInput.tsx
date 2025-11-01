import React from "react";

interface Option {
  id: string;
  displayName: string;
}

interface SelectInputProps {
  id: string;
  onChange: (optionId: Option["id"]) => void;
  options: Option[];
  value: string;
}
function SelectInput({
  id,
  onChange,
  options,
  value = options[0].id,
}: SelectInputProps) {
  return (
    <div className="relative">
      <select
        className="cursor-pointer appearance-none border rounded-md px-4 py-1 pr-8 bg-transparent text-accent focus:ring-2 transition-colors h-full"
        name={id}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map(({ id, displayName }) => (
          <option key={id} value={id}>
            {displayName}
          </option>
        ))}
      </select>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-1 flex items-center pr-2"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="#668affff"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default SelectInput;
