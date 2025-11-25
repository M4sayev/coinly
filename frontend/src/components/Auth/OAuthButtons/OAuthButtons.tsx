import { oauthProviders } from "../../../constants/OAuthProviders";
import type { OAuthProvider } from "../../../types/auth";
import Divider from "../../UI/Divider";
import OAuthButton from "./OAuthButton";

function OAuthButtons() {
  const handleOAuth = (provider: OAuthProvider) => {
    console.log(`OAuth with ${provider} clicked`);
    // TODO: integrate with backend or auth SDK
  };
  return (
    <section>
      <h2 id="social-signin" className="sr-only">
        Social sign-in options
      </h2>
      <Divider text="Or continue with" />
      <ul className="flex gap-3 items-center justify-center mt-5">
        {oauthProviders.map((provider) => {
          const key = `OAuth-${provider.name}`;
          const { text, icon } = provider;
          return (
            <li key={key}>
              <OAuthButton
                ariaLabel={text}
                onClick={() => handleOAuth(provider)}
                Icon={icon}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default OAuthButtons;
