import React from "react";
import FacebookIcon from "../../assets/social-icons/facebook-icon.svg?react";
import GoogleIcon from "../../assets/social-icons/google-icon.svg?react";
import AppleIcon from "../../assets/social-icons/apple-icon.svg?react";
import { cn } from "../../utils/utils";

type OAuthProvider = {
  name: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
};

const oauthProviders: OAuthProvider[] = [
  {
    name: "Google",
    icon: GoogleIcon,
    text: "Continue with Facebook",
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

function SocialAuthButtons() {
  const handleOAuth = (provider: OAuthProvider) => {
    console.log(`OAuth with ${provider} clicked`);
    // TODO: integrate with backend or auth SDK
  };
  return (
    <section>
      <h2 id="social-signin" className="sr-only">
        Social sign-in options
      </h2>
      {/* Divider */}
      <div className="flex items-center justify-center">
        <hr className="flex-1 h-px bg-var(--color-neutral-300)" />
        <span className="mx-3 text-xs text-[var(--color-neutral-300)] whitespace-nowrap">
          Or continue with
        </span>
        <hr className="flex-1 h-px bg-var(--color-neutral-300)" />
      </div>
      {/* OAuth Buttons */}
      <ul className="flex gap-3 items-center justify-center mt-5">
        {oauthProviders.map((provider) => (
          <li key={`OAuth-${provider.name}`}>
            <button
              type="button"
              aria-label={provider.text}
              className={cn(
                "p-3 border border-white rounded-full transition-colors",
                "focus:border-accent focus:outline-none",
                "hover:border-accent"
              )}
              onClick={() => handleOAuth(provider)}
            >
              <provider.icon className="w-4 h-4" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SocialAuthButtons;
