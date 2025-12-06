import Link from "next/link";
interface LinkProps {
  text: string;
  to: string;
  onClick?: () => void;
}

function TermsAndPolicyLink({ text, to, onClick }: LinkProps) {
  return (
    <Link
      onClick={onClick}
      href={to}
      type="button"
      className="ml-1 text-[var(--color-accent)]"
      aria-label={`View our ${text}`}
    >
      {text}
    </Link>
  );
}

export default TermsAndPolicyLink;
