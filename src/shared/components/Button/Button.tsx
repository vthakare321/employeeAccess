import { forwardRef } from "react";

import { Loader } from "@/shared/components/Loader/Loader";

import type { ButtonProps } from "./Button.types";

const baseClasses =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50";

const variantClasses = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
  outline:
    "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
} as const;

const sizeClasses = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
} as const;

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      disabled,
      className = "",
      type = "button",
      ...props
    },
    ref,
  ) => {
    const classes = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      fullWidth ? "w-full" : "",
      className,
    ].join(" ");

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={classes}
        {...props}
      >
        {loading ? (
          <Loader size="sm" />
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = "Button";