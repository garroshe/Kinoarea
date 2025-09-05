import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import { ModalContextProvider } from "@/app/providers/modal";
import { Router } from "@/app/providers/router";
import { UserContextProvider } from "@/app/providers/user";
import { GlobalStyles } from "@/app/styles/globalStyle";
import { queryClient } from "@/shared/config/queryConfig";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

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
