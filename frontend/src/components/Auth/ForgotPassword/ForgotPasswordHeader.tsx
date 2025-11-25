import CloseButton from "../../UI/Buttons/CloseButton";

interface ForgotPasswordHeaderProps {
  onClose: () => void;
}

function ForgotPasswordHeader({ onClose }: ForgotPasswordHeaderProps) {
  return (
    <header className="mb-7 ">
      <h2
        id="forgot-password"
        className="title font-space text-2xl mb-2  lg:text-4xl"
      >
        Reset password
      </h2>
      <p className="font-roboto text-xs text-[var(--color-neutral-200)] lg:text-sm w-full">
        Please provide the email address that you used when you signed up for
        your account
      </p>

      <CloseButton onClose={onClose} ariaLabel="Close Forgot Password dialog" />
    </header>
  );
}

export default ForgotPasswordHeader;
