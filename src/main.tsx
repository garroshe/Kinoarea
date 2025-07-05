import { createRoot } from "react-dom/client";

import { App } from "./app/App.tsx";

import "swiper/css";

import { Provider } from "react-redux";

import { store } from "./app/store";

import "./shared/config/firebase";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
