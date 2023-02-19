import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { AppProvider } from "./components/Context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
