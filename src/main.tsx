import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

AOS.init({
  duration: 700, // Duration of animations in milliseconds
});

import global_de from "./assets/Img/Language/DE/global.json";
import global_en from "./assets/Img/Language/EN/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "de",
  resources: {
    de: {
      global: global_de,
    },
    en: {
      global: global_en,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
