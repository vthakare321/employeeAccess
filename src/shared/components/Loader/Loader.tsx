import { forwardRef } from "react";

import type { LoaderProps } from "./Loader.type";

const sizeClasses = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-[3px]",
  lg: "h-8 w-8 border-4",
} as const;

export const Loader = forwardRef<HTMLDivElement, LoaderProps>(
  ({ size = "md", className = "" }, ref) => {
    const classes = [
      "inline-block animate-spin rounded-full border-current border-t-transparent",
      sizeClasses[size],
      className,
    ].join(" ");

    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        className={classes}
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  },
);

Loader.displayName = "Loader";