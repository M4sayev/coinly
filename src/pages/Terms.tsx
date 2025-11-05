import React from "react";
import NavbarTermsPolicy from "../components/TermsAndPolicy/NavbarTermsPolicy";
import TermsPolicyHeader from "../components/TermsAndPolicy/TermsPolicyHeader";

function Terms() {
  return (
    <main className="m-auto max-w-7xl">
      <NavbarTermsPolicy page="terms-and-conditions" />
      <TermsPolicyHeader
        text="Terms & Conditions"
        dateOfEffectiveness="November 11 2025"
      />
    </main>
  );
}

export default Terms;
