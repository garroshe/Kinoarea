import { BrowserRouter } from "react-router-dom";

import { Header } from "@/widgets/header/ui/Header/Header";
import { ModalContextProvider } from "@/widgets/Modal/context/modalContext";

import { AuthInitializer } from "./providers/AuthInitializer/AuthInitializer";
import { Router } from "./providers/Router/Router";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
      <ModalContextProvider>
        <GlobalStyles />
        <AuthInitializer />
        <Header />
        <Router />
      </ModalContextProvider>
    </BrowserRouter>
  );
}
