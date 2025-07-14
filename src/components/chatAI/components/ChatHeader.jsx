import { IoIosCloseCircle } from "react-icons/io";

export default function ChatHeader({ onClose }) {
  return (
    <div className="flex justify-between items-center p-3 border-b">
      <h2 className="font-semibold text-primary">Hỗ trợ AI</h2>
      <button onClick={onClose}>
        <IoIosCloseCircle className="text-xl text-gray-500 cursor-pointer" />
      </button>
    </div>
  );
}
