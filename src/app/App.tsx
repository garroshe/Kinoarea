import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { AuthInitializer } from "@/app/providers/authInitializer/AuthInitializer";
import { Router } from "@/app/providers/router/Router";
import { store } from "@/app/store";
import { queryClient } from "@/shared/config/queryConfig";
import { Footer } from "@/widgets/footer/ui/Footer/Footer";
import { Header } from "@/widgets/header/ui/Header/Header";
import { ModalContextProvider } from "@/widgets/Modal/context/modalContext";

import { GlobalStyles } from "./styles/globalStyle";

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ModalContextProvider>
            <GlobalStyles />
            <AuthInitializer />
            <Header />
            <Router />
            <Footer />
          </ModalContextProvider>
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
