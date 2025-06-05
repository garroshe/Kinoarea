import {Header} from "./widgets/header/ui/Header/Header.tsx";
import {GlobalStyles} from "./app/styles/global.ts";
import {BrowserRouter} from "react-router-dom";

export function App() {

  return (
    <BrowserRouter>
        <GlobalStyles/>
        <Header/>
    </BrowserRouter>
  )
}
