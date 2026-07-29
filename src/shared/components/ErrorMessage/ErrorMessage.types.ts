import type { ReactNode } from "react";

export interface ErrorMessageProps {
  title?: string;
  message: string;
  action?: ReactNode;
}