import React, { type PropsWithChildren } from "react";
import { cn } from "../../../utils/utils";

interface TrailWrapperProps extends PropsWithChildren {
  size: string;
  className?: string;
}

function TrailWrapper({ size, className, children }: TrailWrapperProps) {
  const handleMoveMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    element.style.setProperty("--mouse-x", `${x}px`);
    element.style.setProperty("--mouse-y", `${y}px`);
  };
  return (
    <div
      className={cn(
        className,
        "cursor-trail overflow-hidden relative hover:before:opacity-100",
        "before:left-0 before:absolute before:top-0 before:h-full before:w-full before:z-0",
        "before:bg-(image:--trail-gradient) before:content-['']",
        "before:opacity-0 before:transition-all before:duration-300 before:pointer-events-none"
      )}
      style={{ "--trail-size": `${size}px` } as React.CSSProperties}
      onMouseMove={handleMoveMouse}
    >
      {children}
    </div>
  );
}

export default TrailWrapper;
