import type { ReactNode } from "react";
import { cn } from "./utils";

export function IconTile({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-xl shadow-control",
        className,
      )}
    >
      {children}
    </span>
  );
}
