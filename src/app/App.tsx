import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import { ModalContextProvider } from "@/app/providers/modal/ui/ModalProvider";
import { Router } from "@/app/providers/router/Router";
import { UserContextProvider } from "@/app/providers/user/ui/UserContextProvider";
import { queryClient } from "@/shared/config/queryConfig";
import { Footer } from "@/widgets/footer/ui/Footer/Footer";
import { Header } from "@/widgets/header/Header";

import { GlobalStyles } from "./styles/globalStyle";

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ModalContextProvider>
          <UserContextProvider>
            <GlobalStyles />
            <Header />
            <Router />
            <Footer />
          </UserContextProvider>
        </ModalContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
