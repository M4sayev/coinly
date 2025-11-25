import { cn } from "../../../utils/utils";
import { X } from "lucide-react";

interface CloseButtonProps {
  onClose: () => void;
  ariaLabel: string;
}

function CloseButton({ onClose, ariaLabel }: CloseButtonProps) {
  return (
    <button
      className={cn(
        "absolute top-7 right-7 cursor-pointer text-2xl text-[var(--color-neutral-100)]",
        " transition-all duration-300 ease-in-out",
        "hover:text-accent hover:scale-120"
      )}
      aria-label={ariaLabel}
      onClick={onClose}
    >
      <X aria-hidden="true" />
    </button>
  );
}

export default CloseButton;
