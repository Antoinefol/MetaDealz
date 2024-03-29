import React from "react";
import ReactDOM from "react-dom/client";
import { DAppProvider } from "@usedapp/core";
import { DAPP_CONFIG } from "./config";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DAppProvider config={DAPP_CONFIG}>
      <App />
    </DAppProvider>
  </React.StrictMode>
);
