import ProductsList from "../../products/ProductsList";

export default function ChatMessages({ messages }) {
  return (
    <div className="flex-1 p-3 overflow-y-auto space-y-2">
      {messages.map((msg, idx) => {
        if (msg.type === "text") {
          return (
            <div
              key={idx}
              className={`flex ${
                msg.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] px-3 py-2 rounded-lg text-sm ${
                  msg.from === "user" ? "bg-blue-100 text-right" : "bg-gray-100"
                }`}
              >
                {msg.text}
              </div>
            </div>
          );
        }

        if (msg.type === "products") {
          return (
            <div key={idx}>
              <ProductsList isChatAI={true} data={msg.data} />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
