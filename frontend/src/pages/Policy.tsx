import NavbarTermsPolicy from "../components/TermsAndPolicy/NavbarTermsPolicy";
import TermsPolicyHeader from "../components/TermsAndPolicy/TermsPolicyHeader";
import Markdown from "react-markdown";
import privacy from "../content/privacy.md";
import { cn } from "../utils/utils";

function Policy() {
  return (
    <main className="text-roboto bg-white">
      <div className="m-auto max-w-7xl">
        <NavbarTermsPolicy page="privacy-policy" filename="Policy" />
        <TermsPolicyHeader
          text="Privacy policy"
          dateOfEffectiveness="November 11 2025"
        />

        <div
          className={cn(
            "flex flex-col px-12 gap-4 text-shadow-black mt-7 md:mt-10 max-w-[100ch] m-auto",
            "[&>h1]:font-bold [&>h2]:font-bold [&>h1]:text-xl [&>h2]:text-lg"
          )}
        >
          <section className="pb-10 mb-8 border-b ">
            <h2 className="text-2xl font-bold mb-5 mt-8 md:text-3xl ">
              Summary of our privacy policy
            </h2>
            <p>
              Coinly collects basic account details and technical information to
              run and improve the app. This includes things like your email, how
              you use the app, and your device or browser information. This data
              is used to keep the service working, improve performance,
              personalize features, and ensure security. Your information is not
              sold to anyone. Coinly may use cookies for things like remembering
              preferences or understanding how the app is used. The app may also
              connect to third-party services, which have their own privacy
              rules that Coinly does not control. Coinly takes steps to protect
              your data, but no digital system is completely secure. The service
              is not intended for users under 13 years old. If the Privacy
              Policy changes, continuing to use Coinly means you accept the
              updated terms.
            </p>
          </section>
          <Markdown
            components={{
              h1: ({ ...props }) => <h2 {...props} />,
            }}
          >
            {privacy}
          </Markdown>
          <div className="p-3"></div>
        </div>
      </div>
    </main>
  );
}

export default Policy;
