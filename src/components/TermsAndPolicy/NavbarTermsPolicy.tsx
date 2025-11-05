import React from "react";
import Logo from "../../assets/logo.svg?react";
import { Link } from "react-router-dom";
import ActionButton from "../UI/ActionButton";
import { formatPage } from "../../utils/utils";

interface NavbarTermsPolicyProps {
  page: string;
}

function NavbarTermsPolicy({ page }: NavbarTermsPolicyProps) {
  return (
    <nav>
      <div className="absolute left-0 right-0 max-w-7xl mx-auto flex justify-between items-center px-6 py-6 font-roboto ">
        <div className="flex gap-4 items-center text-primary font-mono">
          <Link
            to={`/${page}`}
            className="cursor-pointer"
            aria-label={`Go to ${formatPage(page)} page`}
          >
            <Logo className="w-9 h-9" />
          </Link>
          <span className="hidden md:block text-2xl capitalize ">
            {formatPage(page)}
          </span>
        </div>
        <ActionButton variant="secondary">Download PDF</ActionButton>
      </div>
    </nav>
  );
}

export default NavbarTermsPolicy;
