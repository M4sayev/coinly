import FacebookIcon from "../assets/social-icons/facebook-icon.svg?react";
import GoogleIcon from "../assets/social-icons/google-icon.svg?react";
import AppleIcon from "../assets/social-icons/apple-icon.svg?react";
import type { OAuthProvider } from "../types/auth";

export const oauthBtnBaseClass = "w-4 h-4";

export const oauthProviders: OAuthProvider[] = [
  {
    name: "Google",
    icon: GoogleIcon,
    text: "Continue with Google",
  },
  {
    name: "Facebook",
    icon: FacebookIcon,
    text: "Continue with Facebook",
  },
  {
    name: "Apple",
    icon: AppleIcon,
    text: "Continue with Apple",
  },
];
