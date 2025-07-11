import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow overflow-auto  px-4 sm:px-16 lg:px-32">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
