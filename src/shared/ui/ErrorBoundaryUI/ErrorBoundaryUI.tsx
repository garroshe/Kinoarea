import { Component, type ErrorInfo, type ReactNode } from "react";

import type { IErrorBoundaryProps, IErrorBoundaryState } from "./types";
import { StyledErrorBoundary } from "./styled";

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  state: IErrorBoundaryState = {
    error: false,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Caught by ErrorBoundary:", error, errorInfo);
    this.setState({ error: true });
  }

  render(): ReactNode {
    if (this.state.error) {
      return <StyledErrorBoundary>Щось пішло не так :(</StyledErrorBoundary>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
