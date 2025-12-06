function Divider({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center">
      <hr className="flex-1 h-px bg-var(--color-neutral-300)" />
      <span className="mx-3 text-xs text-[var(--color-neutral-300)] whitespace-nowrap">
        {text}
      </span>
      <hr className="flex-1 h-px bg-var(--color-neutral-300)" />
    </div>
  );
}

export default Divider;
