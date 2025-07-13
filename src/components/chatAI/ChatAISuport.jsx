import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";

export function ChatAISuport() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Xin chào! Tôi có thể giúp gì cho bạn hôm nay?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: input }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "user", text: input },
        {
          from: "bot",
          text: "Cảm ơn bạn đã hỏi! Hiện tại tôi chưa được kết nối với AI thật.",
        },
      ]);
    }, 500);

    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-3 border-b">
            <h2 className="font-semibold text-primary">Hỗ trợ AI</h2>
            <button onClick={() => setOpen(false)}>
              <IoIosCloseCircle className="text-xl text-gray-500" />
            </button>
          </div>

          {/* Chat content */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-lg text-sm ${
                    msg.from === "user"
                      ? "bg-blue-100 text-right"
                      : "bg-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex p-2 border-t gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-3 py-1 text-sm focus:outline-primary"
              placeholder="Nhập tin nhắn..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-primary text-white px-3 py-1 rounded text-sm"
            >
              Gửi
            </button>
          </div>
        </div>
      )}

      {/* Nút mở chat */}
      {!open && (
        <button
          className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center text-xl"
          onClick={() => setOpen(true)}
        >
          <FiMessageCircle />
        </button>
      )}
    </div>
  );
}
