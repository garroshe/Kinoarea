import { BrowserRouter } from "react-router-dom";

import { MainPage } from "../pages/MainPage/MainPage.tsx";
import { Header } from "../widgets/header/ui/Header/Header.tsx";
import { GlobalStyles } from "./styles/global.ts";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <MainPage />
    </BrowserRouter>
  );
}
