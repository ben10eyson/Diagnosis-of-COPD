// src/Lungs.js
import { useState } from "react";
import Header from "./header"; // ✅ import Header component

export default function Lungs() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Tell me your symptoms." }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { from: "user", text: input },
      { from: "bot", text: "Thanks, I’ll analyze that." }
    ]);
    setInput("");
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header with logo and profile dropdown */}
      <Header />

      <div className="p-6 flex-1 flex flex-col">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Know Your Lungs</h2>
        <div className="flex-1 bg-white rounded-lg shadow p-4 overflow-y-auto">
          {messages.map((m, idx) => (
            <div key={idx} className={m.from === "user" ? "text-right" : "text-left"}>
              <p
                className={`inline-block px-3 py-2 rounded-lg mb-2 ${
                  m.from === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                {m.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex mt-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your symptoms..."
            className="flex-1 border p-2 rounded-l-lg"
          />
          <button onClick={sendMessage} className="bg-blue-600 text-white px-4 rounded-r-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
