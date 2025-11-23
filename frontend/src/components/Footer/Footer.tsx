import TermsAndPolicyLink from "../UI/form/TernsAndPolicyLink";
import GithubIcon from "../../assets/social-icons/github-icon.svg?react";
import InstagramIcon from "../../assets/social-icons/instagram-icon.svg?react";
import LinkedInIcon from "../../assets/social-icons/linkedin-icon.svg?react";
import TrailWrapper from "../UI/TrailWrapper/TrailWrapper";
import SocialLink from "./SocialLink";

type Icon = {
  name: string;
  provider: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
  url: string;
};

const socialIcons: Icon[] = [
  {
    name: "Github",
    provider: GithubIcon,
    text: "See our github",
    url: "https://github.com/M4sayev",
  },
  {
    name: "Instagram",
    provider: InstagramIcon,
    text: "Follow our instagramm",
    url: "https://www.instagram.com/_elvin_musaev_",
  },
  {
    name: "LinkedIn",
    provider: LinkedInIcon,
    text: "Follow us on LinkedIn",
    url: "https://www.linkedin.com/in/elvin-musayev/",
  },
];

function Footer() {
  return (
    <footer className="font-roboto left-0 right-0 bottom-0 relative bg-[image:var(--gradient-bg)] shadow-2xl">
      <TrailWrapper size="1000">
        <div className="bg-[var(--color-secondary-600)] ">
          <div className="flex items-center flex-col md:flex-row md:justify-between md:px-10 text-[var(--color-neutral-200)] py-8 max-w-7xl mx-auto">
            <div className="text-center md:text-start">
              <span className="block">@ 2025 Coinly</span>
              <span>Market data provided by CoinGecko.</span>
            </div>

            <div className="flex flex-col items-center mt-6 gap-4 md:flex-row md:mt-0">
              <TermsAndPolicyLink text="Privacy Policy" to="/privacy-policy" />
              <TermsAndPolicyLink text="Terms" to="/terms-and-conditions" />
              <nav aria-label="Follow us on social media">
                <ul className="flex justify-center gap-10 mt-3 md:mt-auto md:ml-4 md:gap-5">
                  {socialIcons.map((icon) => (
                    <SocialLink
                      key={`footer-${icon.name}`}
                      name={icon.name}
                      provider={icon.provider}
                      url={icon.url}
                    />
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </TrailWrapper>
    </footer>
  );
}

export default Footer;
