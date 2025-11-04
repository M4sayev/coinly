import React from "react";
import { NavLink } from "react-router-dom";

interface NavLinkProps extends React.PropsWithChildren {
  to: string;
}

function CustomNavLink({ to, children }: NavLinkProps) {
  const baseClasses =
    "relative hover:text-accent transition-colors duration-200 capitalize before:transition-all text-[var(--color-neutral-100)]";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${baseClasses} ${
          isActive ? "text-accent" : "text-[var(--color-neutral-100)]"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default CustomNavLink;
