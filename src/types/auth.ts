export type AuthView = "signup" | "login" | "forgotPassword";

export interface AuthViewProps {
  onClose: () => void;
  setAuthView: React.Dispatch<React.SetStateAction<AuthView>>;
}
