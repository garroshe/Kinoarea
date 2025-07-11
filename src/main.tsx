import { createRoot } from "react-dom/client";

import { App } from "./app/App";

import "swiper/css";
import "./shared/config/firebase";

createRoot(document.getElementById("root")!).render(<App />);
