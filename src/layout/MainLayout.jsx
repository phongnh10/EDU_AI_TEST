import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ChatAISuport } from "../components/chatAI/ChatAISuport";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow overflow-auto xl:px-32">
        <Outlet />
        <ChatAISuport />
      </main>
      <Footer />
    </div>
  );
}
