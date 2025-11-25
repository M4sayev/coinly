export type AuthView = "signup" | "login" | "reset-password";

export const AuthToSlide = {
  signup: "sign up",
  login: "log in",
  "reset-password": "reset password",
} as const;

export type AuthSlide = (typeof AuthToSlide)[AuthView];

export interface AuthViewProps {
  onClose: () => void;
  setAuthView: React.Dispatch<React.SetStateAction<AuthView>>;
}

export type OAuthProvider = {
  name: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
};
