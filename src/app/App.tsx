import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Snowfall } from "react-snowfall";

import { ModalContextProvider } from "@/app/providers/modal";
import { Router } from "@/app/providers/router";
import { UserContextProvider } from "@/app/providers/user";
import { GlobalStyles } from "@/app/styles/globalStyle";
import { queryClient } from "@/shared/config/queryConfig";
import { Footer } from "@/widgets/Footer";

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ModalContextProvider>
          <UserContextProvider>
            <GlobalStyles />
            <Snowfall
              snowflakeCount={80}
              style={{
                position: "fixed",
                width: "100vw",
                height: "100vh",
              }}
            />
            <Router />
            <Footer />
          </UserContextProvider>
        </ModalContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
