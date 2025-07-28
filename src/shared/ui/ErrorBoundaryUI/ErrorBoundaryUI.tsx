import { Component, type ErrorInfo, type ReactNode } from "react";

import { StyledErrorBoundary } from "./styled";

interface Props {
  children: ReactNode;
}

interface State {
  error: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
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
