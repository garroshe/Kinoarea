import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { AuthInitializer } from "@/app/providers/authInitializer/AuthInitializer";
import { Router } from "@/app/providers/router/Router";
import { store } from "@/app/store";
import { Header } from "@/widgets/header/ui/Header/Header";
import { ModalContextProvider } from "@/widgets/Modal/context/modalContext";

import { GlobalStyles } from "./styles/globalStyle";

export function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ModalContextProvider>
          <GlobalStyles />
          <AuthInitializer />
          <Header />
          <Router />
        </ModalContextProvider>
      </Provider>
    </BrowserRouter>
  );
}
