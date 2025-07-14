export default function ChatSuggestions({ suggestions, onClick }) {
  return (
    <div className="flex flex-col p-2 gap-2">
      <p className="font-semibold text-sm text-gray-600">Gợi ý:</p>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((s) => (
          <button
            key={s.id}
            onClick={() => onClick(s)}
            className="px-2 py-1 bg-gray-100 rounded-md text-sm hover:bg-primary hover:text-white transition cursor-pointer"
          >
            {s.text}
          </button>
        ))}
      </div>
    </div>
  );
}
