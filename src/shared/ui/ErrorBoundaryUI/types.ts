import type { ReactNode } from "react";

export interface IErrorBoundaryProps {
  children: ReactNode;
}

export interface IErrorBoundaryState {
  error: boolean;
}
