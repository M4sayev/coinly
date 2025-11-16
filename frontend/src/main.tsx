import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

import "@fontsource/roboto-flex";
import "@fontsource/space-mono";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  </BrowserRouter>
);
