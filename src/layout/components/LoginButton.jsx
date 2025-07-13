import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LoginButton({ className = "" }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div
      className={`flex items-center gap-2 cursor-pointer hover:text-accent transition ${className}`}
      onClick={handleLogin}
    >
      <FaRegUser size={20} className="text-" />
      <span className="text-lg font-bold">Login</span>
    </div>
  );
}
