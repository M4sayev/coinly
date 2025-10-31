import React from "react";
import FacebookIcon from "../../assets/social-icons/facebook-icon.svg?react";
import GoogleIcon from "../../assets/social-icons/google-icon.svg?react";
import AppleIcon from "../../assets/social-icons/apple-icon.svg?react";

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
    <div>
      {/* Divider */}
      <div className="flex items-center justify-center">
        <span className="flex-1 h-px bg-secondary-300"></span>
        <span className="mx-3 text-xs text-neutral-300 whitespace-nowrap">
          Or continue with
        </span>
        <span className="flex-1 h-px bg-secondary-300"></span>
      </div>
      {/* OAuth Buttons */}
      <div className="flex gap-3 items-center justify-center mt-5">
        {oauthProviders.map((provider) => (
          <button
            type="button"
            key={`OAuth-${provider.name}`}
            aria-label={provider.text}
            className="p-3 border-1 rounded-full"
            onClick={() => handleOAuth(provider)}
          >
            <provider.icon className="w-4 h-4" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default SocialAuthButtons;
