import { cn } from "../../../utils/utils";
import SignUpForm from "./SignUpForm";
import AuthFooter from "../AuthFooter/AuthFooter";
import AuthHeader from "../AuthHeader/AuthHeader";
import type { AuthViewProps } from "../../../types/auth";

function SignUp({ onClose, setAuthView }: AuthViewProps) {
  return (
    <section
      className={cn(
        "bg-modal rounded-2xl border border-[rgba(30,33,40,0.8)]",
        "relative p-10 font-roboto text-neutral-100 backdrop-blur-lg"
      )}
    >
      <AuthHeader
        titleId="signup"
        onCloseDialog={onClose}
        authSlide="sign up"
      />
      <SignUpForm />
      <AuthFooter
        setAuth={() => setAuthView("login")}
        promptText="Already have an account?"
        authSlide="log in"
      />
    </section>
  );
}

export default SignUp;
