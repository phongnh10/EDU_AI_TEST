import { NavLink } from "react-router-dom";

export default function NavItem({ path, label, onClick }) {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `flex p-2 text-xl transition  ${
          isActive ? " font-semibold text-accent" : "hover:text-accent"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
