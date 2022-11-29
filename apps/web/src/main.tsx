import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  AssetsProvider,
  BalancesProvider,
  RatesProvider,
  UserProvider,
} from "@mklem92/swyftx-logic";
import App from "./App";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AssetsProvider>
          <RatesProvider>
            <BalancesProvider>
              <App />
            </BalancesProvider>
          </RatesProvider>
        </AssetsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
