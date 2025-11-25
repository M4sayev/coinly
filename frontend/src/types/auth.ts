export type AuthView = "signup" | "login" | "forgot-password";

export interface AuthViewProps {
  onClose: () => void;
  setAuthView: React.Dispatch<React.SetStateAction<AuthView>>;
}

export type OAuthProvider = {
  name: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
};
