import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "./provider/AppProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <Toaster />
      <App />
    </AppProvider>
  </StrictMode>
);
