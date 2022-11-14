import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CssBaseline } from "@mui/material";
import ToggleColorMode from './theme/theme';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToggleColorMode>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ToggleColorMode>
  </React.StrictMode>
);
