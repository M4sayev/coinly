interface LadingPageProps {
  text: string;
  dateOfEffectiveness: string;
}

function TermsPolicyLandingPage({
  text,
  dateOfEffectiveness,
}: LadingPageProps) {
  return (
    <section className="mx-auto px-6">
      <div className="grid grid-cols-2 h-screen items-center">
        <h1 className="text-[clamp(1rem,17vw,6rem)] lg:text-[8rem] font-bold pt-20 md:pt-24 pb-16 md:pb-4">
          {text}
        </h1>
      </div>
      <div className="bg-black text-white text-center font-mono p-7 md:p-10">
        Effective:{" "}
        <time dateTime={dateOfEffectiveness}>{dateOfEffectiveness}</time>
      </div>
    </section>
  );
}

export default TermsPolicyLandingPage;
