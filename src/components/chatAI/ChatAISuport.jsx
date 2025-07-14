import { useEffect, useRef, useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import ChatHeader from "./components/ChatHeader";
import ChatMessages from "./components/ChatMessages";
import ChatSuggestions from "./components/ChatSuggestions";
import ChatInput from "./components/ChatInput";
import { useFavorites } from "../../hooks";

export function ChatAISuport() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  const { favorites } = useFavorites();
  const [messages, setMessages] = useState([
    {
      type: "text",
      from: "bot",
      text: "Xin chào! Tôi có thể giúp gì cho bạn hôm nay?",
    },
  ]);

  const suggestions = [
    { id: 1, text: "Xem khoá học đã xem gần đây" },
    { id: 2, text: "Hiển thị các khoá học đã yêu thích" },
    { id: 3, text: "Gợi ý khoá học phù hợp với bạn" },
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: "text", from: "user", text: input };

    if (input.includes("gợi ý") || input.includes("phù hợp")) {
      setMessages((prev) => [
        ...prev,
        userMessage,
        { type: "products", data: favorites },
        {
          type: "text",
          from: "bot",
          text: "Đây là khoá học bạn có thể quan tâm!",
        },
      ]);
    } else if (input.includes("yêu thích")) {
      setMessages((prev) => [
        ...prev,
        userMessage,
        { type: "products", data: favorites },
        {
          type: "text",
          from: "bot",
          text: "Đây là sản phẩm bạn đã yêu thích!",
        },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        userMessage,
        {
          type: "text",
          from: "bot",
          text: "Cảm ơn bạn đã hỏi! Hiện tại tôi chưa được kết nối với AI thật.",
        },
      ]);
    }

    setInput("");
  };

  const handleSuggestionClick = (s) => {
    setInput(s.text);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (chatRef.current && !chatRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="relative">
          <div
            ref={chatRef}
            className="ml-5 sm:w-[450px] h-[600px] bg-white shadow-lg rounded-lg flex flex-col gap-2"
          >
            <ChatHeader onClose={() => setOpen(false)} />
            <ChatMessages messages={messages} />
            <ChatSuggestions
              suggestions={suggestions}
              onClick={handleSuggestionClick}
            />
            <ChatInput input={input} setInput={setInput} onSend={handleSend} />
          </div>
        </div>
      ) : (
        <button
          className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center text-xl cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <FiMessageCircle />
        </button>
      )}
    </div>
  );
}
