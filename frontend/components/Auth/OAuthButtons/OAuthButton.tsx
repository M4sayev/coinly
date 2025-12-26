import { oauthBtnBaseClass } from "../../../constants/OAuthProviders";
import { cn } from "../../../utils/utils";

interface OAuthButtonProps {
  ariaLabel: string;
  onClick: () => void;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

function OAuthButton({
  ariaLabel,
  onClick,
  Icon,
  className,
}: OAuthButtonProps) {
  const combinedClass = `${oauthBtnBaseClass} ${className ?? ""}`;

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={cn(
        "p-3 border border-white rounded-full transition-colors",
        "focus:border-accent focus:outline-none",
        "hover:border-accent"
      )}
      onClick={onClick}
    >
      <Icon className={combinedClass} aria-hidden="true" />
    </button>
  );
}

export default OAuthButton;
