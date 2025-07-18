import NavItem from "./NavItem";

const navItems = [
  { path: "/", label: "Trang chủ" },
  { path: "/favorite", label: "Yêu thích" },
];

export default function MobileMenu({ isOpen, toggle }) {
  return (
    <div
      className={`sm:hidden bg-primary text-white overflow-hidden transition-all duration-500 ease-in-out  ${
        isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-2"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            {...item}
            onClick={toggle}
            className="text-lg"
          />
        ))}
      </div>
    </div>
  );
}
