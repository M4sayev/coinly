import Link from "next/link";
import LogoIcon from "@/assets/logo.svg";

interface LogoProps {
  linkTo?: string;
  className?: string;
  ariaLabel?: string;
}
const baseClasses = "h-8 w-8";

function Logo({ linkTo, className, ariaLabel = "Go to home page" }: LogoProps) {
  const combinedClass = `${baseClasses} ${className ?? ""}`;
  if (!linkTo) return <LogoIcon className={combinedClass} />;

  return (
    <Link href={linkTo} className="cursor-pointer" aria-label={ariaLabel}>
      <LogoIcon className={combinedClass} />
    </Link>
  );
}

export default Logo;
