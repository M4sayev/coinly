import AuthHeader from "../AuthHeader/AuthHeader";
import AuthFooter from "../AuthFooter/AuthFooter";
import { cn } from "../../../utils/utils";
import LoginForm from "./LoginForm";
import type { AuthViewProps } from "../../../types/auth";

function Login({ onClose, setAuthView }: AuthViewProps) {
  return (
    <section
      className={cn(
        "bg-modal rounded-2xl border border-[rgba(30,33,40,0.8)]",
        "relative overflow-hidden p-10 font-roboto text-neutral-100"
      )}
    >
      <AuthHeader titleId="login" onCloseDialog={onClose} authSlide="log in" />
      <LoginForm setAuthView={setAuthView} />
      <AuthFooter
        setAuth={() => setAuthView("signup")}
        authSlide="sign up"
        promptText="Don't Have an Account?"
      />
    </section>
  );
}

export default Login;
