import React, { useState } from "react";
import axios from "axios";
import "../styles.css";

const ChatGPTClone = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };

    const updatedMessages = [...messages, { type: "user", text: input }];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        messages: [
          ...updatedMessages
            .filter((msg) => msg.type)
            .map((msg) => ({
              role: msg.type === "user" ? "user" : "assistant",
              content: msg.text,
            })),
          userMessage,
        ],
      });

      const reply = res.data.choices[0].message.content;
      setMessages((prev) => [...prev, { type: "bot", text: reply }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Something went wrong. Try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5 text-white animate__animated animate__fadeIn">
      <h2 className="text-center mb-4">💬 ChatGPT Clone</h2>

      <div className="chat-box bg-dark p-3 rounded mb-4 shadow-sm" style={{ minHeight: "300px", maxHeight: "500px", overflowY: "auto" }}>
        {messages.length === 0 && (
          <p className="text-secondary text-center">Start the conversation...</p>
        )}

        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 p-2 rounded animate__animated animate__fadeInUp ${
              msg.type === "user"
                ? "bg-primary text-white text-end"
                : "bg-secondary text-white text-start"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="bg-secondary text-white p-2 rounded text-start mb-2 animate__animated animate__pulse animate__infinite">
            Typing...
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="d-flex gap-2 animate__animated animate__fadeInUp">
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button className="btn btn-outline-light" disabled={loading}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatGPTClone;
