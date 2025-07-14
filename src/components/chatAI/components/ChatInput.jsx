export default function ChatInput({ input, setInput, onSend }) {
  return (
    <div className="flex p-3 border-t gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border border-gray-300 rounded px-3 py-1 text-[16px] focus:outline-primary"
        placeholder="Nhập tin nhắn..."
        onKeyDown={(e) => e.key === "Enter" && onSend()}
      />
      <button
        onClick={onSend}
        className="bg-primary text-white px-3 py-1 rounded text-sm cursor-pointer"
      >
        Gửi
      </button>
    </div>
  );
}
