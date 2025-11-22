import type { SerializedError } from "@reduxjs/toolkit";
import type { PropsWithChildren } from "react";

interface ErrorProps extends PropsWithChildren {
  error: SerializedError | undefined;
}
function Error({ error, children }: ErrorProps) {
  console.error(error);

  return (
    <div
      role="status"
      aria-live="polite"
      className="text-[var(--color-accent-dblue)] font-mono grid place-items-center"
    >
      {children}
    </div>
  );
}

export default Error;
