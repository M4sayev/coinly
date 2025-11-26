import NavbarTermsPolicy from "../components/TermsAndPolicy/NavbarTermsPolicy";
import Markdown from "react-markdown";
import terms from "../content/terms.md";
import { cn } from "../utils/utils";
import TermsPolicyLandingPage from "../components/TermsAndPolicy/TermsPolicyLandingPage";

function Terms() {
  return (
    <main className="text-roboto bg-white">
      <div className="m-auto max-w-7xl">
        <NavbarTermsPolicy page="terms-and-conditions" filename="Terms" />
        <TermsPolicyLandingPage
          text="Terms & Conditions"
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
              Summary of our terms
            </h2>
            <p>
              You must be at least 13 and provide accurate account information.
              Coinly shows crypto data, but this data may not always be accurate
              and is not financial advice. You are responsible for your own
              investment decisions. All content and branding in Coinly is owned
              by the company — don&apos;t reuse it without permission. We are
              not responsible for any financial losses or issues caused by using
              Coinly. If you break the rules, we may suspend or remove your
              account. The terms may change, and continued use means you accept
              updates.
            </p>
          </section>
          <Markdown
            components={{
              h1: ({ ...props }) => <h2 {...props} />,
            }}
          >
            {terms}
          </Markdown>
          <div className="p-3"></div>
        </div>
      </div>
    </main>
  );
}

export default Terms;
