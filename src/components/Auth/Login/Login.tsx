import React from "react";
import AuthHeader from "../AuthHeader";
import AuthFooter from "../AuthFooter";
import { cn } from "../../../utils/utils";
import LoginForm from "./LoginForm";
import type { AuthView } from "../AuthDialog";

interface LoginProps {
  onClose: () => void;
  setAuthView: React.Dispatch<React.SetStateAction<AuthView>>;
}

function Login({ onClose, setAuthView }: LoginProps) {
  return (
    <div
      className={cn(
        "bg-[var(--color-modal)] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-[rgba(30,33,40,0.8)]",
        "relative overflow-hidden p-10 font-roboto text-[var(--color-neutral-100)]"
      )}
    >
      <AuthHeader onCloseDialog={onClose} actionText="Log In" />
      <LoginForm setAuthView={setAuthView} />
      <AuthFooter
        setAuth={() => setAuthView("signup")}
        actionText="Sign Up"
        promptText="Don't Have an Account?"
      />
    </div>
  );
}

export default Login;
