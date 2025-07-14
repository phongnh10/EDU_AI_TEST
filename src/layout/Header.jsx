import { useState } from "react";
import logo from "/src/assets/logo/logo_edu.png";
import NavItem from "./components/NavItem";
import MobileMenu from "./components/MobileMenu";
import { GiHamburgerMenu } from "react-icons/gi";

const navItems = [
  { path: "/", label: "Trang chủ" },
  { path: "/favorite", label: "Yêu thích" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-white shadow p-4 sm:p-4">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-8 w-auto invert" />
          <span className="text-xl font-bold">EduAI</span>
        </div>

        <nav className="hidden sm:flex flex-1 justify-end items-center">
          {navItems.map((item) => (
            <NavItem key={item.path} {...item} />
          ))}
        </nav>

        <div className="sm:hidden" onClick={() => setOpen((prev) => !prev)}>
          <GiHamburgerMenu size={24} />
        </div>
      </div>

      <MobileMenu isOpen={open} toggle={() => setOpen(false)} />
    </header>
  );
}
