import { cn } from "../../../utils/utils";
import SignUpForm from "./SignUpForm";
import AuthFooter from "../AuthFooter";
import AuthHeader from "../AuthHeader";
import type { AuthViewProps } from "../../../types/auth";

function SignUp({ onClose, setAuthView }: AuthViewProps) {
  return (
    <div
      className={cn(
        "bg-[var(--color-modal)] rounded-2xl border border-[rgba(30,33,40,0.8)]",
        "relative overflow-hidden p-10 font-roboto text-[var(--color-neutral-100)] backdrop-blur-lg"
      )}
    >
      <AuthHeader onCloseDialog={onClose} actionText="Sign Up" />
      <SignUpForm />
      <AuthFooter
        setAuth={() => setAuthView("login")}
        promptText="Already have an account?"
        actionText="Log In"
      />
    </div>
  );
}

export default SignUp;
