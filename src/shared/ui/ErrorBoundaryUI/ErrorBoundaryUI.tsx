import { Component, type ErrorInfo, type ReactNode } from "react";

import { ErrorStateUI } from "@/shared/ui/ErrorStateUI";

export type ErrorBoundaryPropsType = {
  children: ReactNode;
};

export type ErrorBoundaryStateType = {
  error: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryPropsType, ErrorBoundaryStateType> {
  state: ErrorBoundaryStateType = {
    error: false,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Caught by ErrorBoundary:", error, errorInfo);
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorStateUI />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
