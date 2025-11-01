import React from "react";
import { NavLink } from "react-router-dom";

interface NavLinkProps extends React.PropsWithChildren<{}> {
  to: string;
}

function CustomNavLink({ to, children }: NavLinkProps) {
  const baseClasses =
    " hover:text-accent transition-colors duration-200 capitalize";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${baseClasses} ${
          isActive
            ? "text-[var(--color-accent)]"
            : "text-[var(--color-neutral-100)]"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default CustomNavLink;
