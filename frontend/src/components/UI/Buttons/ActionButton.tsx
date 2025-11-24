import React from "react";

export type ButtonVariant = "primary" | "secondary";
type ButtonType = "button" | "submit";

interface ActionButtonProps extends React.PropsWithChildren {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: ButtonVariant;
  type?: ButtonType;
  disabled?: boolean;
}
function ActionButton({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  ...rest
}: ActionButtonProps) {
  const baseClasses =
    "px-4 py-2 rounded leading-none md:px-6 transition-all duration-300 ease-in-out lg:px-10 lg:py-3 capitalize flex gap-2 hover:opacity-75 focus-visible:opacity-75 active:opacity-60 justify-center text-nowrap";

  const variantClasses = {
    primary: "bg-accent-dblue text-white",
    secondary: "bg-transparent text-accent border-accent border-1",
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]}`;
  return (
    <button
      data-testid="action-button"
      data-variant={variant}
      type={type}
      className={finalClasses}
      {...rest}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default ActionButton;
