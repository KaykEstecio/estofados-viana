import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { inject } from "@vercel/analytics";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/cormorant-garamond/latin-500-italic.css";
import "@fontsource/cormorant-garamond/latin-600.css";
import "@fontsource/cormorant-garamond/latin-ext-400.css";
import "@fontsource/cormorant-garamond/latin-ext-500.css";
import "@fontsource/cormorant-garamond/latin-ext-500-italic.css";
import "@fontsource/cormorant-garamond/latin-ext-600.css";
import "@fontsource/montserrat/latin-400.css";
import "@fontsource/montserrat/latin-500.css";
import "@fontsource/montserrat/latin-600.css";
import "@fontsource/montserrat/latin-ext-400.css";
import "@fontsource/montserrat/latin-ext-500.css";
import "@fontsource/montserrat/latin-ext-600.css";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

inject({ mode: import.meta.env.PROD ? "production" : "development" });
