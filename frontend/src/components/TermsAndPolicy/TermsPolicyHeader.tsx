interface HeaderProps {
  text: string;
  dateOfEffectiveness: string;
}

function TermsPolicyHeader({ text, dateOfEffectiveness }: HeaderProps) {
  return (
    <header className="mx-auto px-6">
      <div className="grid grid-cols-2 h-screen items-center">
        <span className="text-[clamp(1rem,17vw,6rem)] lg:text-[8rem] font-bold pt-[5rem] md:pt-[6rem] pb-[4rem] md:pb-[1rem]">
          {text}
        </span>
      </div>
      <div className="bg-black text-white text-center font-mono p-7 md:p-10">
        Effective:{" "}
        <time dateTime={dateOfEffectiveness}>{dateOfEffectiveness}</time>
      </div>
    </header>
  );
}

export default TermsPolicyHeader;
