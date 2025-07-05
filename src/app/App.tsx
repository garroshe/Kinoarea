import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import { MainPage } from "../pages/MainPage/MainPage";
import { queryClient } from "../shared/api/queryConfig";
import { Header } from "../widgets/header/ui/Header/Header";
import { ModalContextProvider } from "../widgets/Modal/context/modalContext";
import { AuthInitializer } from "./providers/AuthInitializer/AuthInitializer";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ModalContextProvider>
          <GlobalStyles />
          <AuthInitializer />
          <Header />
          <MainPage />
        </ModalContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
