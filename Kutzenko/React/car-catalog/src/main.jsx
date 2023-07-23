import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/ui/Router";
import "./assets/styles/global.css";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>
);
