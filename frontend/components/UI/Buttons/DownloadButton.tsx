import type { ButtonVariant } from "./ActionButton";
import ActionButton from "./ActionButton";

interface DownloadButtonProps {
  filename: string;
  actionText: string;
  variant?: ButtonVariant;
}

function DownloadButton({
  filename,
  actionText,
  variant = "primary",
}: DownloadButtonProps) {
  return (
    <a
      href={`./${filename}.pdf`}
      download={`${filename}.pdf`}
      aria-label={`Download our ${filename}`}
      data-testid="download-button"
    >
      <ActionButton variant={variant}>{actionText}</ActionButton>
    </a>
  );
}

export default DownloadButton;
