import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { Fragment } from "react";
import { cn } from "../../utils/utils";

interface Option {
  id: string;
  displayName: string;
}

interface DropdownProps {
  id: string;
  onChange: (optionId: Option["id"]) => void;
  options: Option[];
  value: string;
}

function SelectDropdown({ id, onChange, options, value }: DropdownProps) {
  return (
    <div>
      <Listbox value={value} onChange={onChange}>
        <div className="relative h-full">
          <ListboxButton className="relative cursor-pointer appearance-none border rounded-md px-4 py-1 pr-8 text-[var(--color-accent)] focus:ring-2 transition-colors h-full">
            <span>{value}</span>
            <ChevronDown
              className="absolute top-1/2 -translate-y-1/2 right-2 h-5 w-5 text-[var(--color-accent)]"
              aria-hidden="true"
            />
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions
              modal={false}
              className="text-center absolute bg-[var(--color-neutral-900)] backdrop-blur-sm  border-[var(--color-accent)] border text-[var(--color-accent)] mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 focus:outline-none sm:text-sm"
            >
              {options.map((option) => (
                <ListboxOption
                  key={id}
                  value={option.displayName}
                  className={cn(
                    "cursor-pointer select-none px-3 py-2",
                    "data-[headlessui-state~='active']:bg-[var(--color-accent)] data-[headlessui-state~='active']:text-[var(--color-primary)]",
                    "data-[headlessui-state~='selected']:font-semibold"
                  )}
                >
                  <span>{option.displayName}</span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default SelectDropdown;
