interface HeaderProps {
  text: string;
  dateOfEffectiveness: string;
}

function TermsPolicyHeader({ text, dateOfEffectiveness }: HeaderProps) {
  return (
    <header className="mx-auto px-6">
      <div className="grid grid-cols-2 h-screen items-center">
        <div className="flex flex-col">
          <div className="py-10 md:py-14"></div>
          <h1 className="text-[clamp(1rem,17vw,6rem)] lg:text-[8rem] font-bold">
            {text}
          </h1>
          <div className="py-8 md:py-2"></div>
        </div>
        <div></div>
      </div>
      <div className="bg-black text-white text-center font-mono p-7 md:p-10">
        Effective: {dateOfEffectiveness}
      </div>
    </header>
  );
}

export default TermsPolicyHeader;
