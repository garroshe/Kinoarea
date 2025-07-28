import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import { ModalContextProvider } from "@/app/providers/modal/ModalProvider";
import { UserContextProvider } from "@/app/providers/user/UserContextProvider";
import { Router } from "@/app/routing/Router";
import { GlobalStyles } from "@/app/styles/globalStyle";
import { queryClient } from "@/shared/config/queryConfig";
import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";

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
