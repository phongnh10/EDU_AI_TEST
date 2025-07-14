import { useEffect, useRef, useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import ChatHeader from "./components/ChatHeader";
import ChatMessages from "./components/ChatMessages";
import ChatSuggestions from "./components/ChatSuggestions";
import ChatInput from "./components/ChatInput";
import { useFavorites, useRecentProducts } from "../../hooks";

export function ChatAISuport() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  const { favorites } = useFavorites();
  const { recentProducts } = useRecentProducts();

  const [messages, setMessages] = useState([
    {
      type: "text",
      from: "bot",
      text: "Xin chào! Tôi có thể giúp gì cho bạn hôm nay?",
    },
  ]);

  const suggestions = [
    { id: 1, text: "Đã xem gần đây" },
    { id: 2, text: "Sản phẩm đã yêu thích" },
    { id: 3, text: "Gợi ý sản phẩm phù hợp" },
  ];

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    const userMessage = { type: "text", from: "user", text };

    let botMessages = [];

    if (text.includes("xem")) {
      botMessages = [
        { type: "products", data: recentProducts },
        {
          type: "text",
          from: "bot",
          text: "Đây là sản phẩm bạn đã xem gần đây!",
        },
      ];
    } else if (text.includes("yêu thích")) {
      botMessages = [
        { type: "products", data: favorites },
        {
          type: "text",
          from: "bot",
          text: "Đây là sản phẩm bạn đã yêu thích!",
        },
      ];
    } else if (text.includes("phù hợp")) {
      const random = Math.random() < 0.5 ? favorites : recentProducts;
      const label =
        random === favorites
          ? "Đây là sản phẩm bạn đã yêu thích (ngẫu nhiên)!"
          : "Đây là sản phẩm bạn đã xem gần đây (ngẫu nhiên)!";

      botMessages = [
        { type: "products", data: random },
        {
          type: "text",
          from: "bot",
          text: label,
        },
      ];
    } else {
      botMessages = [
        {
          type: "text",
          from: "bot",
          text: "Cảm ơn bạn đã hỏi! Hiện tại tôi chưa được kết nối với AI thật.",
        },
      ];
    }

    setMessages((prev) => [...prev, userMessage, ...botMessages]);
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
            className="ml-5 sm:w-[450px] h-[600px] sm:h-[670px] bg-white shadow-lg rounded-lg flex flex-col gap-2"
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
          className="w-14 h-14 bg-primary border-1 border-white text-white rounded-full shadow-lg flex items-center justify-center text-xl cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <FiMessageCircle />
        </button>
      )}
    </div>
  );
}
