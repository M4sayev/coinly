import React from "react";

interface ActionButtonProps extends React.PropsWithChildren<{}> {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
function ActionButton({ children, onClick, ...rest }: ActionButtonProps) {
  const baseClasses =
    "px-4 py-2 bg-accent-dblue rounded leading-none text-white md:px-6 transition-all  duration-300 ease-in-out lg:px-10 lg:py-3 capitalize flex gap-2 hover:opacity-75 active:opacity-60";
  return (
    <button className={baseClasses} {...rest} onClick={onClick}>
      {children}
    </button>
  );
}

export default ActionButton;
