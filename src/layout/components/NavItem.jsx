import { NavLink } from "react-router-dom";

export default function NavItem({ path, label, onClick }) {
  const disabledPaths = ["/news", "/support", "/about-us"];
  const isDisabled = disabledPaths.includes(path);

  const handleClick = (e) => {
    if (onClick) onClick();

    if (isDisabled) {
      e.preventDefault();
    }
  };

  return (
    <NavLink
      to={path}
      onClick={handleClick}
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
