import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "./context/AppContext.jsx";
import { ChatAISuport } from "./components/chatAI/ChatAISuport.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <Toaster />
      <App />
      {/* <ChatAISuport />     */}
    </AppProvider>
  </StrictMode>
);
