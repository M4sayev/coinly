import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps extends React.PropsWithChildren {
  to: string;
}

function CustomNavLink({ to, children }: NavLinkProps) {
  const pathname = usePathname();
  const baseClasses =
    "relative hover:text-accent transition-colors duration-200 capitalize before:transition-all text-[var(--color-neutral-100)] text-shadow-lg";

  const activeClasses =
    pathname === to ? "text-accent" : "text-[var(--color-neutral-100)]";
  return (
    <Link href={to} className={`${baseClasses} ${activeClasses}`}>
      {children}
    </Link>
  );
}

export default CustomNavLink;
